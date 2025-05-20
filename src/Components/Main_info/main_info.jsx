import "../Main_info/main_info.css";
import React from "react";
import ProfilePicture from "@assets/MELANIE.png";

function MainInfo() {
  const date = "2001-03-10";
  const agecalc = () => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  const realage = agecalc();

  return (
    <section className="py-10 md:py-16">
      <div className="container mx-auto max-w-screen-xl px-2 bg-orange-500 h-screen">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center space-y-16 md:flex-row md:space-x-6 md:space-y-0 text-balance bg-red-100">
            <div className="bg-blue-100">
              <img
                src={ProfilePicture}
                alt="Profile"
                className="h-40 w-40 rounded-full"
              />
            </div>
            <div className="text-blue-200 bg-green-100 ">
              <h1>Melanie Saraí Raquec Ramirez</h1>
              <h2>Estudiante de Ingeniería</h2>
              <p>
                Tengo <strong>{realage}</strong> años.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainInfo;
