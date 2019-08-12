import axios from "axios";
import * as types from './action_type';
import firebase from '../firebase.js';
import AMIGURUMISLIST from '../Assets/Data/amigurumis-list.json';

const FIREBASE_USER_EMAIL = 'elenaorfe@gmail.com';
const FIREBASE_USER_PWD = 'firebaseEOFBY';
const KEY_LIKES = 'bymanitas-likes';
const FIREBASE_DB_LIKES = 'likes';
const FIREBASE_DB_CONTACT = 'form';
const FORMAT_DATE_SEPARATOR = '/';
const FORMAT_HOUR_SEPARATOR = ':';
const FORMAT_DATE_HOUR_SEPARATOR = ' - ';
const FORMAT_LOCATION_SEPARATOR = '-';

window.bymanitas = {};
window.bymanitas.likes = JSON.parse(sessionStorage.getItem(KEY_LIKES)) || [];

function getLocalization(){
    axios.get('https://ipinfo.io')
        .then(response => {
            window.bymanitas.localization = response.data.country + FORMAT_LOCATION_SEPARATOR + response.data.city;
        })
        .catch(err => {
            window.bymanitas.localization = 'undefined';
        })
}

//Login into Firebase
export function loginFirebase(){
    getLocalization();
    return(dispatch)=>{
        return firebase.auth().signInWithEmailAndPassword(FIREBASE_USER_EMAIL, FIREBASE_USER_PWD)
            .then((response)=>{
                console.log('ok');
            })
            .catch((err) => {
                console.log('error');
            })
    }
}

//Update Like Item
export function updateLikeItem(id, isLike){
    var itemName = AMIGURUMISLIST.en.amigurumis[id - 1].name;
    return(dispatch)=>{
        const params = {
            date: getDate(),
            geolocation: window.bymanitas.localization
        };

        if(isLike){
            firebase.database().ref().child(FIREBASE_DB_LIKES).child(itemName).push(params);
            window.bymanitas.likes.push(id);
            sessionStorage.setItem(KEY_LIKES, JSON.stringify(window.bymanitas.likes));
        }else{
            var index = JSON.parse(sessionStorage.getItem(KEY_LIKES)).indexOf(id);
            if (index > -1) {
                window.bymanitas.likes.splice(index, 1);
                sessionStorage.setItem(KEY_LIKES, JSON.stringify(window.bymanitas.likes));
            }
        }

    }
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getDate(){
    var currentDate = new Date();
    var currentDateFormatted = currentDate.getDate() + FORMAT_DATE_SEPARATOR
        + (currentDate.getMonth()+1)  + FORMAT_DATE_SEPARATOR
        + currentDate.getFullYear() + FORMAT_DATE_HOUR_SEPARATOR
        + addZero(currentDate.getHours()) + FORMAT_HOUR_SEPARATOR
        + addZero(currentDate.getMinutes()) + FORMAT_HOUR_SEPARATOR
        + addZero(currentDate.getSeconds());
    return currentDateFormatted;
}

//Submit Form
export function submitContactForm(message, name, email){
    const params = {
        message: message,
        name: name,
        email: email,
        date: getDate(),
        geolocation: window.bymanitas.localization
    };
    var url = firebase.database().ref().child(FIREBASE_DB_CONTACT).push(params) + '.json';
    var data = params;
    return(dispatch)=>{
        return axios.post(url,data)
    }
}

//Set show contact form
export function showContactForm(value){
    return{
        type: types.SHOW_CONTACTFORM,
        data: value
    };
}
