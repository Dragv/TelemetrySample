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
                Charts
            </v-card-title>
            <v-row>
                <v-col>
                    <GChart
                        type="ColumnChart"
                        :data="mostUsedAbilitiesData"
                        :options="mostUsedAbilitiesOptions"
                    />
                </v-col>
                <v-col>
                    <GChart
                        type="LineChart"
                        :data="damagePerformedByTimeData"
                        :options="damagePerformedByTimeOptions"
                    />
                </v-col>
            </v-row>
                <v-col>
                    <GChart
                        type="PieChart"
                        :data="winRateByClassesData"
                        :options="winRateByClassesOptions"
                    />
                </v-col>
                <v-col>
                </v-col>
            <v-row>

            </v-row>
        </v-card>
    </section>

</template>
<script>

    import Controller from '@/../lib/controller'

    class HomeController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                mostUsedAbilitiesOptions: {
                    title: 'Most used abilities',
                },
                damagePerformedByTimeOptions: {
                    title: 'Damgae performed by time',
                },
                winRateByClassesOptions: {
                    title: 'Win rate by classes'
                }
            };

            this.props = {
                name: String,
            };

            this.injectActions([ 'setName' ]);
            this.injectGetters([ 'playerName', 'mostUsedAbilitiesData', 'damagePerformedByTimeData', 'winRateByClassesData' ]);
        }

        login(nickname) {
            this.setName(nickname);
        }
    }

    export default new HomeController('pgHome');

</script>
<style scoped>
    /* Local styles for this template */
    .home-container {
        display: inline-block;
        width: 100%;
    }

    .home {
        margin:2vw;
        border: 1px solid black;
        background-color: lightgray;
        color: black;
        height: 78vh;
        width: 80vw;
    }

    .sample-form {
        border: 2px solid #333;
        margin: 1em;
        padding: 2em;
    }
</style>
