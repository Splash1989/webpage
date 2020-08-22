/* eslint-disable vue/no-side-effects-in-computed-properties */
<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-8 offset-2">
          <div class="card mt-5">
            <div class="card-header">
              <h2 class="card-title">Stimme jetzt ab</h2>
            </div>
            <div class="card-body">
              <div v-for="entry in sortedEntries" :key="entry.id" class="media my-3">
                <img v-bind:src="entry.image" class="mr-3" />
                <div class="media-body">
                  <h5>
                    {{ entry.title}}
                    <span class="float-right text-primary"> 
                      <i class="fa fa-chevron-up">
                        <strong>{{ entry.votes }}</strong>
                      </i>
                    </span>
                  </h5>
                  <div>{{ entry.desc }}</div>
                  <small class="text-muted">Eingereicht von: {{ entry.author }}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Voter",
  data: function () {
    return {
      entries: [
        {
          id: 1,
          title: "Spaghetti Bolognese",
          desc: "Ein Nudelgericht mit Hackfleischsoße",
          votes: 16,
          author: "Italien",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 2,
          title: "Wiener Schnitzel",
          desc: "Ein dünnes Schnitzel aus Kalbfleisch",
          votes: 112,
          author: "Österreich",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 3,
          title: "Peking Ente",
          desc: "Das kaiserliche Gericht",
          votes: 20,
          author: "China",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 4,
          title: "Gulasch",
          desc: "Ein traditionelles Ragout",
          votes: 51,
          author: "Ungarn",
          image: "https://via.placeholder.com/64",
        },
        {
          id: 5,
          title: "Hamburger",
          desc: "Gestapelte Zutaten zwischen Brötchen",
          votes: 42,
          author: "USA",
          image: "https://via.placeholder.com/64",
        }
      ],
    };
  },

  components: {
    Navbar,
  },

  computed: {
      sortedEntries () {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          return this.entries.sort((a,b) => {
              return b.votes - a.votes;
          });
      }
  }
};
</script>
