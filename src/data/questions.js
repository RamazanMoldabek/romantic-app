import scala from '../assets/Scala.mp4';
import meninAtym from '../assets/meninAtym.mp4';
import tired from '../assets/tiredMurat.mp4';
import murat from '../assets/Murat-Aitpasan-AitpayaKoy.mp4';
import nerv from '../assets/nervMurat.mp4';
import heart from '../assets/heart.mp4';
import ayau1 from '../assets/ayau1.jpeg';
import ayau2 from '../assets/ayau2.jpeg';
import ayau3 from '../assets/ayau3.jpeg';
import ayau4 from '../assets/ayau4.jpeg';

export const questions = [
  {
    id: 0,
    question: "Сенің атың Аяулым ба?",
    options: ["Ия, сен дұрыс айтасың", "Жоқ, мен Аяулым емеспін", "Мүмкін, бірақ сенімді емеспін", "Единственная и не повторимая"],
    answers: ["Ия, сен дұрыс айтасың", "Единственная и не повторимая"],
    cardTexts: ["Өзіншелер", "Қарапайым қыздар", "CleanGirl-дар", "Пикмилар"],
    images: [ayau1, ayau2, ayau3, ayau4],
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
    question: "Ең бірінші қай жерде кездестік?",
    options: ["Стадионда", "Мектепте", "Білмеймін е", "Магнумда"],
    answers: ["Стадионда"],
    video: nerv,
    failMessage: "Внатуре есіңде жоқ па сонда? Ай ай ай"
  },
  {
    id: 3,
    question: "Біздің памятный жер есіңде ме?",
    options: ["Набкадағы скамейка", "Қайдан білейін", "Мектеп", "Стадион"],
    answers: ["Набкадағы скамейка"],
    video: tired,
    failMessage: "Наны білмесеің, айта алмаймын енді"
  },
  {
    id: 4,
    question: "Мен сені ұнатамын ба?",
    options: ["Жоқ, мүлде", "Скорее жоқ, чем я", "Безумно, больше всего. Менен қалай басын кетпейді", "Мүмкін, бірақ сенімді емеспін"],
    answers: ["Безумно, больше всего. Менен қалай басын кетпейді"],
    video: heart,
    failMessage: "Неге сенбейсін? "
  }
];
