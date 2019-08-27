'use strict';


let myFavariteBook = [
    'head_first_javascript_programing',
    'Learning_Responsive_Web_Design',
    'Twele_Rules_For_life',
    'The_Subtle_Art_of_Not_Giving_a_Fuck',
    'Once_Upon_A_Cow',
    'The_Hundred_Year_Old_Man_Who_Climbed_Out_of_The_Window_and_Disappeared',
    'The_art_of_Seduction',
    'Good_To_Great',
    'The_Godfather',
    'You_dont_know_Js_up_and_going'
];
const bookList = {
    head_first_javascript_programing: {
        title: 'HEAD FIRST JAVASCRIPT PROGRAMING',
        language: 'In English',
        author: 'by Elisabeth Robson, Eric T. Freeman',
        releseDate: " release date : 2014",
        img: "image/headfirs.jpg"

    },
    Learning_Responsive_Web_Design: {
        title: 'LEARNING RESPONSIVE WEB DESIGN',
        language: 'In English',
        author: ' by Clarissa Perterson',
        releseDate: " release date : 2014",
        img: 'image/web.jpg'

    },
    Twele_Rules_For_life: {
        title: '12 RULES FOR LIFE',
        language: 'In English',
        author: 'by Jordan Peterson',
        releseDate: " release date : 2018",
        img: 'image/life.jpg'
    },
    The_Subtle_Art_of_Not_Giving_a_Fuck: {
        title: 'The Subtle Art of Not Giving a F*ck',
        language: 'In English',
        author: 'by Mark Manson ',
        releseDate: " release date : 2016",
        img: 'image/art.jpeg'
    },
    Once_Upon_A_Cow: {
        title: 'Once Upon a Cow',
        language: 'In English',
        author: 'by  Cruz Ph.D, Camilo',
        releseDate: " release date : 2009",
        img: 'image/cow.jpg'
    },
    The_Hundred_Year_Old_Man_Who_Climbed_Out_of_The_Window_and_Disappeared: {
        title: 'The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared',
        language: 'In English',
        author: 'by Jonas Jonasson',
        releseDate: " release date : 2012",
        img: 'image/oldman.jpg'
    },
    The_art_of_Seduction: {
        title: 'The Art Of Seduction',
        language: 'In English',
        author: 'by Robert Greene',
        releseDate: " release date : 2004",
        img: 'image/seduction.jpeg'
    },
    Good_To_Great: {
        title: 'Good To Great',
        language: 'In English',
        author: 'by Jim Collins',
        releseDate: " release date : 2001",
        img: 'image/goodTogreat.jpg'
    },
    The_Godfather: {
        title: 'The Godfather',
        language: 'In Vietnamese',
        author: 'by  Mario Puzo',
        releseDate: " release date : 20102",
        img: 'image/godfather.jpeg'
    },
    You_dont_know_Js_up_and_going: {
        title: 'You Dont Know JS - Up and Going',
        language: 'In English',
        author: 'by Kyle Simpson',
        releseDate: " release date : 2015",
        img: 'image/upandgoing.jpg'
    }
};
// add Ul with li inside
let makeAList = () => {
    myFavariteBook.forEach((item) => {
        const addUl = document.createElement('ul');
        let addLi = document.createElement('li');
        addUl.appendChild(addLi);
        addLi.setAttribute('id', item);
        document.body.appendChild(addUl)
    })
}
console.log()
    // functions add infomation of books
const showBookListTittle = (event, addId) => {
    let addH2 = document.createElement('h2');
    let addTitle = document.createTextNode(event);
    addH2.appendChild(addTitle);
    document.querySelector(addId).appendChild(addH2);
}
const showBookListLangguage = (event, addId) => {
    let addH3 = document.createElement('h3');
    let addLanguage = document.createTextNode(event);
    addH3.appendChild(addLanguage);
    document.querySelector(addId).appendChild(addH3)
}
const showBookListDetail = (event, addId) => {
    let addP = document.createElement('p');
    let addDetail = document.createTextNode(event);
    addP.appendChild(addDetail);
    document.querySelector(addId).appendChild(addP);
}
const showBookImage = (event, addId) => {
        let imgElement = document.createElement('img');
        imgElement.setAttribute("src", event);
        let addImg = document.createTextNode(event);
        imgElement.appendChild(addImg);
        document.querySelector(addId).appendChild(imgElement);
    }
    // function invokes 4 functions above
const printInfoOfBook = (propertyOfbookList, addId) => {
    addId = '#' + addId;
    console.log(addId) //#head_first_javascript_programing
    showBookListTittle(propertyOfbookList.title, addId);
    showBookListLangguage(propertyOfbookList.language, addId);
    showBookListDetail(propertyOfbookList.author, addId)
    showBookListDetail(propertyOfbookList.releseDate, addId);
    showBookImage(propertyOfbookList.img, addId);
};
// get arguments for bookList(propertyOfbookList, addId)
const a = () => {
        myFavariteBook.forEach((key) => {
            console.log(bookList[key])
            printInfoOfBook(bookList[key], key)
        })
    }
    //  the browser will run these function below when the page is fully loaded. 
window.onload = () => {
    makeAList();
    a()
}