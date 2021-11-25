import {createApp} from "vue";
import App from "./components/App.vue";
import {store} from "@/store/store";
import firebase from "firebase/compat";
import {firebaseConfig} from "@/utils/constants";


firebase.initializeApp(firebaseConfig);
const app = createApp(App);
app.use(store);
app.mount("#app");
