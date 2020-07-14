<template>
    <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
            <h1 class="display-1">Login</h1>    
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field 
                    label="Username"
                    v-model="credentials.username" 
                    prepend-icon="mdi-account-circle" 
                />
                <v-text-field
                    v-model="credentials.password"
                    label="Password"
                    :type="showPassword ? 'text' : 'password'"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="showPassword = !showPassword" 
                />
                <v-divider />
                <v-card-actions>
                    <v-btn color="info" @click="login">Sign in</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        showPassword: false,
        credentials: {
            password: null,
            username: null,
        }
    }),
    methods: {
        login(){
            this.$store.dispatch('login', this.credentials);
            this.$router.push('/')
        }
    }
}
</script>