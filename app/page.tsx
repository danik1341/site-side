"use client";

import Image from "next/image";
import Link from "next/link";
import { IoChevronBackCircleSharp, IoChevronUpCircle } from "react-icons/io5";

import Rectangle from "/public/images/Rectangle.svg";
import PhoneHand from "/public/images/PhoneHand.svg";
import BlueLine from "/public/images/BlueLine.svg";
import Bulb from "/public/images/Bulb.svg";
import Pencil from "/public/images/Pencil.svg";
import Cube from "/public/images/Cube.svg";
import Rocket from "/public/images/Rocket.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between py-2 md:py-10">
      {/* hero */}
      <div className="flex flex-row md:justify-end">
        {/* left */}
        <div className="flex flex-col items-center text-right md:w-3/5 md:items-start">
          <h1 className="text-[#5ED7FF] font-calibribold font-bold text-2xl md:text-4xl xl:text-5xl">
            בניית אתרים מיוחדים לעסק שלך
          </h1>
          <h2 className="mt-2 text-lg font-bold font-calibriregular md:text-2xl xl:text-3xl">
            עיצוב מתאים למוצרים ולשירותים שלך.
          </h2>
          <p className="w-3/4 mt-3 text-sm font-normal text-right font-calibriregular md:text-base xl:text-lg">
            בימנו אתר אינטרנט הוא כלי עסק חיוני , באתר מתקיימת ההכירות הראשונית
            עם לקוחות פוטנציאלים ונכרעת ההחלטה האם לבחור בעסק שלך או במתחרים
            שלך. חשוב להבין שאתר האינטרנט אינו רק מטרה לחסוף את העסק ולתת מידע
            אנפורמטיבי , אלה גם מהווה כלי שיווקי מרכזי להפניית לקויות והגדלת
            המענקים. לכן מומלץ להשקיע באתר אינטרנט מקצועי ומשכנע , שיוביל להשגת
            יתרונות עסקיים.
          </p>

          {/* examples-buttons */}
          <div className="flex flex-col self-start p-5 mt-5 font-calibriregular md:flex-row md:items-center">
            {/* button-1 */}
            <div className="flex flex-col items-center md:p-3">
              <h1 className="text-xl font-bold text-[#5ED7FF] xl:text-3xl">
                חנויות אונליין
              </h1>
              <div className="flex flex-row items-center mt-1 md:flex-col">
                <p className="text-sm font-light text-right md:text-center xl:text-base">
                  למכור את המוצרים או שירותים שלך באינטרנט בקלות.
                </p>
                <Link href={"/"}>
                  <IoChevronBackCircleSharp className="text-[#5ED7FF] mr-2 w-5 h-5 md:hidden" />
                </Link>
                <Link href={"/"}>
                  <IoChevronUpCircle className="text-[#5ED7FF] mt-5 w-14 h-14 hidden md:block" />
                </Link>
              </div>
            </div>

            {/* button-2 */}
            <div className="flex flex-col items-center mt-3 md:p-3 md:mt-0">
              <h1 className="text-xl font-bold text-[#5ED7FF] xl:text-3xl">
                אתרי תדמית
              </h1>
              <div className="flex flex-row items-center mt-1 md:flex-col">
                <p className="text-sm font-light text-right md:text-center xl:text-base">
                  לאפשר ללקוחות להכיר ולהתחבר לעסק שלך יותר טוב ומהר.
                </p>
                <Link href={"/"}>
                  <IoChevronBackCircleSharp className="text-[#5ED7FF] mr-2 w-5 h-5 md:hidden" />
                </Link>
                <Link href={"/"}>
                  <IoChevronUpCircle className="text-[#5ED7FF] mt-5 w-14 h-14 hidden md:block" />
                </Link>
              </div>
            </div>

            {/* button-3 */}
            <div className="flex flex-col items-center mt-3 md:p-3 md:mt-0">
              <h1 className="text-xl font-bold text-[#5ED7FF] xl:text-3xl">
                עמודי נחיתה
              </h1>
              <div className="flex flex-row items-center mt-1 md:flex-col">
                <p className="text-sm font-light text-right md:text-center xl:text-base">
                  לקדם את המוצר או שירות שלך בעמוד ייעודי ומרשים.
                </p>
                <Link href={"/"}>
                  <IoChevronBackCircleSharp className="text-[#5ED7FF] mr-2 w-5 h-5 md:hidden" />
                </Link>
                <Link href={"/"}>
                  <IoChevronUpCircle className="text-[#5ED7FF] mt-5 w-14 h-14 hidden md:block" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="hidden w-fit h-fit md:block">
          {/* rectangle */}
          <div className="absolute w-[300px] h-[600px] right-0 -top-28 xl:w-[400px] xl:h-[700px] xl:right-10 2xl:right-36">
            <Image
              src={Rectangle}
              alt="Rectangle"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* phone-hand */}
          <div className="absolute w-[250px] h-[650px] right-10 top-[-130px] xl:w-[400px] xl:h-[700px] xl:top-[-158px] xl:right-28 2xl:right-52">
            <Image
              src={PhoneHand}
              alt="PhoneHand"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* work */}
      <div className="flex flex-col items-center w-full mt-10 md:mt-28">
        <h1 className="text-2xl font-bold font-calibribold md:text-4xl">
          תהליך עבודה
        </h1>
        <div className="relative w-1/2 h-7 md:w-1/4">
          <Image
            src={BlueLine}
            alt="BlueLine"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* work-desc */}
        <div className="grid grid-cols-1 p-5 md:grid-cols-2 md:grid-rows-2 md:justify-items-center">
          <div className="flex flex-col items-center mt-3 md:mt-8">
            <div className="relative w-20 h-20 md:w-40 md:h-40">
              <Image
                src={Bulb}
                alt="Bulb"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="mt-3 text-xl font-bold font-calibribold md:text-2xl xl:text-3xl">
              איפיון
            </h1>
            <p className="mt-3 text-xs text-right font-calibriregular md:text-center md:text-base xl:text-lg">
              הכרות עם העסק, קביעת מטרות ויעדים, מחקר על הקהל היעד ויצירת סקיצות
              ראשוניות לאתר.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="relative w-20 h-20 md:w-40 md:h-40">
              <Image
                src={Pencil}
                alt="Pencil"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="mt-3 text-xl font-bold font-calibribold md:text-2xl xl:text-3xl">
              עיצוב
            </h1>
            <p className="mt-3 text-xs text-right font-calibriregular md:text-center md:text-base xl:text-lg">
              התאמת עיצוב גרפי על פי האיפיון והסקיצות הכולל בחירת פונטים, צבעים
              וקונספט לאתר.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-16">
            <div className="relative w-20 h-20 md:w-40 md:h-40">
              <Image
                src={Cube}
                alt="Cube"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="mt-3 text-xl font-bold font-calibribold md:text-2xl xl:text-3xl">
              פיתוח
            </h1>
            <p className="mt-3 text-xs text-right font-calibriregular md:text-center md:text-base xl:text-lg">
              פיתוח האתר על פלטפורמת NEXT.JS תוך התאמתו למערכת לפי האיפיון
              והעיצוב וכמובן דרישת הלקוח.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-16">
            <div className="relative w-20 h-20 md:w-40 md:h-40">
              <Image
                src={Rocket}
                alt="Rocket"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="mt-3 text-xl font-bold font-calibribold md:text-2xl xl:text-3xl">
              העלאה לרשת
            </h1>
            <p className="mt-3 text-xs text-right font-calibriregular md:text-center md:text-base xl:text-lg">
              לאחר בדיקות אחרונות ואישור הלקוח מעלים את האתר המוכן לאינטרנט
              שיחשף לעיני כולם.
            </p>
          </div>
        </div>

        {/* price */}
        <div className="flex flex-col items-center justify-center w-full h-full p-5 mt-5 bg-gradient-to-b from-transparent via-transparent to-blue-500">
          <h1 className="text-2xl font-bold font-calibribold">
            מעוניין בהצעת מחיר לבניית אתר?
          </h1>
          <div className="flex flex-col items-center justify-center w-1/3 mt-5 md:flex-row md:w-3/4 xl:w-full xl:justify-evenly">
            <div className="p-3">
              <input className="rounded-md xl:w-64 xl:h-10" placeholder="שם" />
            </div>
            <div className="p-3">
              <input
                className="rounded-md xl:w-64 xl:h-10"
                placeholder="מספר"
              />
            </div>
            <div className="p-3">
              <input
                className="rounded-md xl:w-64 xl:h-10"
                placeholder="אימייל"
              />
            </div>
          </div>
          <button className="w-40 h-10 border-solid rounded-md bg-[#5ED7FF] mt-5 md:w-60">
            שליחת פרטים
          </button>
        </div>
      </div>
    </main>
  );
}
