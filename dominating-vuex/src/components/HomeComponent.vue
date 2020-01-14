<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row class="main-content">
          <div class="card-a">
            <Card 
              cardTitle="Post data"
              :firstText="upperTitle"
              :secondText="truncatedBody"
            >
            <extraData>>
              <v-form>
                <v-text-field :value="title" @input="updateTitle" />
                <v-text-field v-model="body" />
              </v-form>
            </extraData>

            </Card>
          </div>

          <div class="card-b">
            <Card 
              cardTitle="User data"
              :firstText="userName"
              :secondText="userEmail"
            >
            
              <extraData>
                <v-btn @click="getUser">get user data </v-btn>
              </extraData>

              <extraData>
                <p>{{ street }}</p>
                <p>{{ suite }}</p>
                <p>{{city}}</p>
              </extraData>

              <extraData>
                <h3 v-if="userPostCounter">Posted <span>{{ userPostCounter }}</span></h3>
              </extraData>
            </Card>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Card from './Card'
// import ExtraData from './ExtraData'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Card,
    // ExtraData
  },
  
  computed: {
    ...mapState('postModule', [
      'title'
    ]),

    ...mapGetters('postModule', [
      'truncatedBody', 'upperTitle'
    ]),

    ...mapState('userModule', {
      userEmail: 'email',
      userPostCounter: 'postsCount'
    }),

    ...mapGetters('userModule', {
      userName: 'upperName'
    }),

    ...mapState('userModule/address', [
      'street', 'suite', 'city'
    ]),

    body: {
      get () {
        return this.$store.state.postModule.body
      },

      set (value) {
        this.$store.commit('postModule/setBody', value)
      }
    }
  },

  created () {
    this.getData()
  },

  methods: {
    ...mapActions('postModule', [
      'getData'
    ]),

    ...mapActions('userModule', {
      getUser: 'getData'
    }),

    updateTitle: function (e) {
      this.$store.commit('postModule/setTitle', e)
    }
  }
}
</script>

<style scoped>
.container, .row {
  height: 100%;
}

.main-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
span {
  color: green;
}

</style>
