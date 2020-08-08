<!--
VFS VUE Single File Component

<pg-home user="User"></pg-home>

Copyright (c) 2018. Scott Henshaw, Kibble Online Inc. All Rights Reserved.
-->
<template>

    <section>
        <v-card
            class="pa-12 ma-5"
            outlined
            tile
        >
            <v-card-title
                class="pa-0"
            >
                Form
            </v-card-title>
            <v-form ref="form" :model="valid" @submit.prevent="send">
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="buildId"
                            :rules="idRules"
                            :counter="10"
                            label="Build Id"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="playerId"
                            :rules="idRules"
                            :counter="10"
                            label="Player Id"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            type="number"
                            v-model="posX"
                            label="X Position"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            type="number"
                            v-model="posY"
                            label="Y Position"
                            required
                        >
                        </v-text-field>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="statusSelect"
                            :items="[
                                'Offline',
                                'Online',
                            ]"
                            label="Status"
                            required
                        >
                        </v-select>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn
                            :disabled="valid"
                            type="submit"
                            color="success"
                            class="mr-4"
                        >
                            Submit
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>

        <v-card
            class="pa-12 ma-5"
            outlined
            tile
        >
            <v-card-title
                class="pa-0"
            >
            Data
            </v-card-title>

            {{ getAllData() }}

            <v-data-table
                :headers="headers"
                :items="data"
                :items-per-page="10"
                class="elevation-1"
            ></v-data-table>
        </v-card>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                headers: [
                    { text: 'Build ID', value: 'buildId' },
                    { text: 'Player ID', value: 'playerId' },
                    { text: 'X Position', value: 'posX' },
                    { text: 'Y Position', value: 'posY' },
                    { text: 'Status', value: 'statusSelect' }
                ],
                data: [],
                getAllData: this.getAllData,
                valid: false,
                idRules: [
                    value => !!value || 'ID is required',
                    value => value.length <= 10 || 'ID must be less than 10 characters',
                ],
                buildId: null,
                playerId: null,
                posX: null,
                posY: null,
                statusSelect: null,
            };

            this.props = {
            };

            this.injectActions([ 'sendData' ]);
            this.injectGetters([ 'getData' ]);
        }

        send() {
            const params = {
                buildId: this.buildId,
                playerId: this.playerId,
                posX: this.posX,
                posY: this.posY,
                statusSelect: this.statusSelect,
            };

            this.sendData(params).then(() => this.data.push(params));
        }

        getAllData() {
            this.getData.then(value => this.data = value);
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
</style>
