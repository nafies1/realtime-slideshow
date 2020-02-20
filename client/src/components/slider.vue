<template>
  <div>
      <img :src="`${imgs[index]}`" alt="">
      <br/>
      <button class="btn btn-primary sama" @click.prevent="previous">previous</button>
      <button class="btn btn-primary sama" @click.prevent="next">Next</button>
  </div>
</template>

<script>
export default {
    name: 'slider',
    data() {
        return {
            index: 0,
            imgs : ['https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg', 
                    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg', 
                    'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&w=1000&q=80', 
                    'https://image.shutterstock.com/image-illustration/3d-wallpaper-design-little-flowers-260nw-1177630450.jpg', 
                    'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-thumb.jpg', 
                    'https://steamuserimages-a.akamaihd.net/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/']
        }
    },
    props: ['socket'],
    methods: {
        next () {
            if (this.index < this.imgs.length-1) {
                this.index++
            } else {
                this.index = 0
            }
            this.socket.emit('slideImage', this.index)
        },
        previous () {
            if (this.index > 0) {
                this.index--
            } else {
                this.index = this.imgs.length-1
            }
            this.socket.emit('slideImage', this.index)
        }
    },
    created () {
        this.socket.on('changeImage', (data) => {
            this.index = data
        })
    },
}
</script>

<style scoped>
    img {
        /* max-width: 600px; */
        /* width: 100vw; */
        width: 100rem; 
        height: 43rem;
        object-fit: cover; 
    }
    .sama {
        width: 10rem;
        margin: 0.5rem;
    }
</style>