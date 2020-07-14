<template>
  <v-form v-model="valid">  
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.name"
            label="Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.email"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.phone"
            label="Phone"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.website"
            label="Website"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.city"
            label="City"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="selectedContact.company"
            label="Company"
            required
          ></v-text-field>
        </v-col>
        <v-btn @click="$emit('discardChanges')">Discard changes</v-btn>
        <v-spacer />
        <v-btn @click="$emit('saveChanges', selectedContact)" color="success">Save</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Contact from '../models/contact'

  export default {
    props: ['editedContact'],
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    //   selectedContact: new Contact('','','','','','','')
    }),
    computed:{
        selectedContact(){
            return this.editedContact;
        }
    },
  }
</script>