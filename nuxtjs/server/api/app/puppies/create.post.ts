import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {

	const formData = await readFormData(event)

	const puppy: PuppysCreateType = {
		breed: Number(formData.get('breed')), // TODO: Change to uuid or id
		price: Number(formData.get('price')),
		weight: Number(formData.get('weight')),
		microchip: formData.get('microchip') == '0' ? false : true,
		pedigree: Number(formData.get('pedigree')),
		isFemale: formData.get('gender') == '0' ? false : true,
		birth: formData.get('birth') as string,
	}

	

	/*
		const orderId = await sql`
		INSERT INTO puppies (
		  breed, size, gender, color, name, cpf, phone, whatsapp, address, city, cep
		) VALUES (
		  ${body.breed}, ${body.size}, ${body.gender}, ${body.color}, ${body.name},
		  ${body.cpf}, ${body.phone}, ${body.whatsapp}, ${body.address}, ${body.city}, ${body.cep}
		) RETURNING id
	  `;
	
	*/
})
