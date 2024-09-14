import { Preference } from 'mercadopago'
import { mercadopago } from '../utils/mercadopago'
import { femalePriceMultiplier } from '../utils/constants'
import { sql } from "@vercel/postgres";

import details from '~/assets/jsons/breeds_details.json'
import availableGenders from "~/assets/jsons/genders.json"
// import priceTable from "~/assets/jsons/price_table.json"

export default defineEventHandler(async event => {
	const runtimeConfig = useRuntimeConfig()
	const body = await readBody(event)

	const isDev = process.dev;


	const orderId = await sql`
	INSERT INTO orders (
	  breed, size, gender, color, name, cpf, phone, whatsapp, address, city, cep
	) VALUES (
	  ${body.breed}, ${body.size}, ${body.gender}, ${body.color}, ${body.name},
	  ${body.cpf}, ${body.phone}, ${body.whatsapp}, ${body.address}, ${body.city}, ${body.cep}
	) RETURNING id
  `;

	const selectedBreed = details.find(breed => breed.uuid === body.breed)
	const selectedColor = selectedBreed?.colors.find(color => color.query === body.color) ?? selectedBreed?.colors[0]
	const selectedSize = selectedBreed?.sizes.find(size => size.query === body.size) ?? selectedBreed?.sizes[0]
	const seletedGender = availableGenders.find(gender => gender.query === body.gender) ?? availableGenders[0]

	const title = `${selectedBreed?.name} ${selectedColor?.name} ${seletedGender?.name} ${selectedSize?.name}`
	// let price = details.find(pet=> pet.breed ==  )
	let price = details.find(pet => pet.uuid === body.breed && pet.size === selectedSize?.query && price.color === selectedColor?.query)?.price

	if (seletedGender.query == 'female') {
		price = (price ?? 0) * femalePriceMultiplier
	}

	const preference = new Preference(mercadopago)
	const response = await preference.create({
		body: {
			auto_return: 'approved',
			back_urls: {
				success: `${isDev ? runtimeConfig.public.devBaseURL : runtimeConfig.public.baseURL}/payment/success`,
			},
			items: [
				{
					id: body.breed
						.toLowerCase()
						.replace(' ', '_'),
					quantity: 1,
					title: title,
					unit_price: price ?? 5000, // O preço depende do filhote no json, consultar com base no uuid
				},
			],
			metadata: {
				uuid: orderId.rows[0].id
			},
			payer: {
				name: body.name,
				identification: {
					type: "CPF",
					number: body.cpf
				},
			},
		},
	})

	if (isDev) {
		return { url: isDev ? response.sandbox_init_point : response.init_point }

	} else {
		return { url: response.init_point }
	}

})


