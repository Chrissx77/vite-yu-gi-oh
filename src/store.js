import { reactive } from "vue";

export const store = reactive({
    arrayCards: [],
    apiURL: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',

    arrayArche: [],
    apiArche: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    searchArche:'',
});


