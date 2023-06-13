import rigoImage from "../../img/rigo-baby.jpg";
import  Contact  from "../component/contacts.jsx";
const apiUrl=process.env.API_URL
const agendaSlug=process.env.AGENDA_SLUG


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				
				
			],
			contactos : [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ale_agenda")
				.then((res) => res.json())
				.then((data) => setStore({contacts: data}));
			},
			
			
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;