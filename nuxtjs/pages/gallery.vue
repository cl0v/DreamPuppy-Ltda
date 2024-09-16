<template>
  <div class="container">
    <h1 class="title">Lista de Cards</h1>
    <div class="card-list">
      <div v-for="(item, index) in items" :key="index" class="card">
        <img :src="item.image" :alt="item.title" class="card-image" />
        <h2 class="card-title">{{ item.title }}</h2>
        <p class="card-description">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: "https://blog-static.petlove.com.br/wp-content/uploads/2018/08/cavalier-king-charles-spaniel-filhote.jpg",
          title: 'Calavier King Charles Spaniel',
          description: 'Macho'
        },
        {
          image: "https://love.doghero.com.br/wp-content/uploads/2017/02/Galeria-4-Cavalier.jpg",
          title: 'Card 2',
          description: 'Descrição do Card 2'
        },
        {
          image: "https://clubedocavalier.com.br/wp-content/uploads/2019/07/IMG-8489.jpg",
          title: 'Card 3',
          description: 'Descrição do Card 3'
        },
        {
          image: 'https://via.placeholder.com/150',
          title: 'Card 4',
          description: 'Descrição do Card 4'
        }
      ]
    };
  }
}
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.card-image {
  width: 100%;
  height: 150px;
  /* Definindo uma altura fixa */
  object-fit: cover;
  /* Faz com que a imagem se ajuste ao contêiner, cortando o excesso */
  border-radius: 10px;
}

.card-title {
  margin-top: 15px;
  font-size: 20px;
}

.card-description {
  margin-top: 10px;
  font-size: 16px;
  color: #666;
}
</style>