import scala from '../assets/Scala.mp4';
import meninAtym from '../assets/meninAtym.mp4';
import tired from '../assets/tiredMurat.mp4';
import murat from '../assets/Murat-Aitpasan-AitpayaKoy.mp4';
import nerv from '../assets/nervMurat.mp4';
import heart from '../assets/heart.mp4';
import ayau1 from '../assets/cleangirl.jpeg';
import ayau2 from '../assets/ozinshe.jpeg';
import ayau3 from '../assets/pikmi.jpeg';
import ayau4 from '../assets/usualgirl.jpeg';

export const questions = [
  {
    id: 0,
    question: "Сенің атың Нұрай ма?",
    options: ["Ия, сен дұрыс айтасың", "Жоқ, мен Нұрай емеспін", "Мүмкін, бірақ сенімді емеспін", "Единственная и не повторимая"],
    answers: ["Ия, сен дұрыс айтасың", "Единственная и не повторимая"],
    cardTexts: ["Өзіншелер", "Қарапайым қыздар", "CleanGirl-дар", "Пикмилар"],
    images: [ayau2, ayau4, ayau1, ayau3],
    video: meninAtym,
    failMessage: "Приколистсын ба?"
  },

  {
    id: 1,
    question: "Біз қашан таныстық?",
    options: ["2023 жылы", "2024 жылы", "2022 жылы", "Есімде жоқ"],
    answers: ["2023 жылы"],
    cardTexts: ["CleanGirl-дар", "Өзіншелер", "Пикмилар", "Кәдімгі қыздар"],
    images: [
      "/assets/cleaning.jpeg",
      "/assets/ozinshe.jpeg",
      "/assets/pikmi.jpeg",
      "/assets/usualgirl.jpeg"
    ],
    video: scala,
    failMessage: "Мммм ок. Солай де"
  },
  {
    id: 2,
    question: "Менен сұлу жігіт өмірінде кездеспеді ғой ия?",
    options: ["Жоқ, кездесті", "Конечно кездеспеді жаным", "Сен единственный и неповторимый", "Бір рет болған"],
    answers: ["Конечно кездеспеді жаным", "Сен единственный и неповторимый"],
    video: nerv,
    failMessage: "Внатуре есіңде жоқ па сонда? Ай ай ай"
  },
  {
    id: 3,
    question: "Сен мені жақсы көресін ба?",
    options: ["Жоқ, мүлде", "Скорее жоқ, чем я", "Безумно, больше всего. Сенсіз өмір сүре алмаймын💕💕❤️", "Мүмкін, бірақ сенімді емеспін"],
    answers: ["Безумно, больше всего. Сенсіз өмір сүре алмаймын💕💕❤️"],
    video: tired,
    failMessage: "Наны білмесеің, айта алмаймын енді"
  },
  {
    id: 4,
    question: "Мен сені жақсы көремін ба?",
    options: ["Жоқ, мүлде", "Скорее жоқ, чем я", "Әрине, мені жақсы көрмей қайда барасын", "Мүмкін, бірақ сенімді емеспін"],
    answers: ["Әрине, мені жақсы көрмей қайда барасын"],
    video: heart,
    failMessage: "Неге сенбейсін? "
  }
];
