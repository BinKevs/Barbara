import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";

function Reviews() {
  const [review, setReview] = useState([
    {
      message:
        "Fun, witty and creative! What a clever idea for a book. What an awesome teacher!",
      creator: "Angela V",
    },
    {
      message:
        "Fabulous limerick writing! Anyone can enjoy this lovely written book, giggles galore.",
      creator: "Meredith Jo",
    },
    {
      message:
        "The book Around the World in Five Lines takes you on an adventure. I bought this book for my grandchildren. When we read a limerick we google the location to find out more about the place. They love learning about different spots in the world.",
      creator: "GrannyBeBe",
    },
    {
      message:
        "Limerick writing is very precise, and follows regimented discipline. In just five lines, the author has to write a beginning middle and end to to this particular type of poetry. This book takes the reader on a journey not only around the world by naming new places, stating a predicament. and finally. a playful solution all in just fine lines. If you like to read different kinds of poetry, this is a great book.",
      creator: "Helena Graves",
    },
    {
      message:
        "Mr. Anstead's Around the World in 5 Lines is a treat for all lovers of the written word. He takes you to many unknown places around the world! It is humor mixed with geography a treat for the entire family!",
      creator: "Amazon Customer",
    },
    {
      message:
        "James is a very gifted gentleman who has used limericks to expose his love for language and the world. James has created vivid imagery in five lines. If you love traveling and language, this is a definite purchase.",
      creator: "Celeste Hill Brockett",
    },
    {
      message:
        "Around the World in Five Lines......loved it! Very sophisticated, showing a great deal of worldly experiences! The limericks in this book make you chuckle! Great read! Dawn",
      creator: "Dawn",
    },
    {
      message:
        "Reviewed in the United States on November 24, 2018 These limericks made me want to find out exactly where the cities and towns were located. It was alot of fun to share with family and friends.",
      creator: "Cullen",
    },
    {
      message:
        "A really fun gift I received this year the Adventures and the places you go in this book I love reading them to my kids",
      creator: "january",
    },
    {
      message:
        "Witty and fun. Must read. These five lines will take you to the corners of the world with excitement and comedy.",
      creator: "josh jones",
    },
    {
      message: "Very enjoyable read. Funny and smart!",
      creator: "Roger franxman",
    },
    {
      message: "Eclectic samples of life in five lines.",
      creator: "Timothy Mercer",
    },
  ]);
  return (
    <>
      <div className="h-full bg-black relative flex md:mt-[88px] mt-[82px] ">
        <div className="m-auto w-[80%] text-white">
          <div>
            <div className="text-7xl font-bold py-6 uppercase text-[#13699B]">
              Kirkus
            </div>
            <div className="text-gray-400 text-md ">
              <div>Release Date: June 28, 2018</div>
              <div>ISBN: 978-1-4809-5936-1</div>
              <div>Page Count: 46</div>
              <div>Publisher: Dorrance Publishing Co.</div>
              <div>Review Posted Online: Dec. 18, 2018</div>
            </div>
            <div className="text-gray-300 text-xl my-4 ">
              {" "}
              " A book of poetry that works a classic form for all it’s worth."
            </div>
            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#13699B] ml-8">
              “Do not try to do everything. Do one thing well.” So said the late
              Steve Jobs, giving advice that debut poet Anstead seems to have
              taken quite seriously. The latter’s new collection does one thing
              and one thing only: the limerick. This, of course, is the most
              homespun of poetic forms, and the best-known example has arguably
              the most famous first line in all literature: “There once was a
              man from Nantucket…” This chestnut isn’t as old as one might
              think; it appeared in the Princeton Tiger in 1902, attributed to
              one Dayton Voorhees. Not to be outdone, Anstead offers roughly 200
              more here. Like Voorhees’ original, each opens in a particular
              locale (hence the volume’s title). For example: “An eccentric
              young man from Toledo / Adopted “total self-expression” as his
              credo. / So every day, exactly at noon, / He would cause his
              neighbors to swoon / When he circled the block in his Speedo.”{" "}
              <br /> <br /> If you’re not a fan of the domestic setting, the
              poet is also quite happy to take you abroad: “An inventive
              short-order cook from Swaziland / Thought the soup du jour was
              rather bland. / But in his zeal to improve the corn chowder, / He
              hastily added so much curry powder, / That one taste was all
              anyone could stand.” Anstead can go on—and does—and it’s a model
              that may feel repetitive. However, this compilation offers more
              smiles than one might anticipate. The only problem is that the
              author has a bad habit of trying to cram too many words into a
              line. The third and fourth lines of a limerick, combined,
              traditionally skip by in 12 syllables, but Anstead’s too often
              push past 20. (Take the Swaziland entry above as just one example
              of this.) Fortunately, at the end of the day, this tic doesn’t
              ruin the fun. Anstead packs lots of joy into tiny packages in this
              slim but playful collection.
            </div>
            <div className="text-lg my-4">
              Source :{" "}
              <a
                className=" cursor-pointer text-blue-600 font-bold"
                target="_Blank"
                href="https://www.kirkusreviews.com/book-reviews/james-b-anstead/around-the-world-in-five-lines/"
              >
                www.kirkusreviews.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-7xl font-bold text-end py-6 uppercase text-[#54447F]">
              Pacific Book Review
            </div>
            <div className="text-gray-400 text-md text-end">
              <div>Release Date: June 28, 2018</div>
              <div>ISBN: 978-1647537241</div>
              <div>Page Count: 48</div>
              <div>Publisher: URLink Print & Media, LLC</div>
              <div> Reviewed by: Jack Chambers</div>
              <div>Genre: Literature & Fiction / Poetry</div>
              <div>Review Posted Online: Dec. 18, 2018</div>
            </div>
            <div className="text-gray-300 text-xl my-4 text-end">
              {" "}
              " A One of life’s greatest adventures which people strive to have
              in their lives at one point or another is the ability to travel."
            </div>
            <div className="text-gray-300 text-lg text-right border-r-4 pr-4 border-[#54447F] mr-8">
              Growing up in a specific country and learning about the world
              around us, many people have the desire, and for some the need, to
              travel and visit these faraway lands which make up our planet.
              Whether it is to immerse ourselves in a different culture, see
              historical landscapes, or meet new friends, travel has a way of
              giving us a well-rounded picture of what makes up our planet. As
              Ralph Waldo Emerson once said, “Though we travel the world over to
              find the beautiful, we must carry it with us or we find it not.”
              <br /> <br />
              In author James B. Anstead’s Around the World in Five Lines, the
              author takes readers on a journey around the globe and into
              various cultures through hilarious and fun limericks. Using the
              style of poetry to capture unique moments from his travels,
              readers are treated to a beautiful blend of different cultures and
              humorous commentary through poetic writing on the ways in which we
              interact with the world around us as we travel across new
              locations and meet new people
              <br /> <br />
              The author did such a great job of crafting fun, creative, and
              lighthearted limericks that readers can instantly connect to.
              Aside from the poetic nature of the author’s writing, one thing
              that stood out was the travel aspect of the limerick’s subjects,
              as the work allowed readers not only to learn of the author’s
              adventures, but to gain a natural curiosity about the areas the
              author mentions and explored throughout these limericks. The
              writing style was precise and captured the technical aspects of
              writing limericks, and yet the writing itself felt natural and
              upbeat, allowing the writing to flow smoothly without the
              technicality of it all to seem too rigid.
              <br /> <br />
              This is the perfect read for those who enjoy poetry, in particular
              poetry that utilizes the limerick style of writing, and those who
              enjoy travel and all which it entails. As a fan of poetry and an
              aspiring traveler, this collection spoke to me as it had the heart
              and fun that an adventure around the world is supposed to have,
              while the style of writing captured the fast-pace and hustle that
              can come from traveling on a timed schedule Fast-paced, memorable,
              and entertaining, author James B. Anstead’s Around the World in
              Five Lines is a must-read collection of limericks. A perfect
              balance between the appreciation and love that goes into world
              travel and the artistry and humor of limericks, this collection
              will warm the reader’s hearts and bring a lighthearted nature to
              the business of travel that will heal the stresses that many feel
              whilst in the throes of travel as a whole.
            </div>
            <div className="text-lg my-4 text-end">
              Source :{" "}
              <a
                className=" cursor-pointer text-blue-600 font-bold"
                target="_Blank"
                href="https://www.pacificbookreview.com/around-the-world-in-five-lines/"
              >
                www.pacificbookreview.com
              </a>
            </div>
          </div>
          <div>
            <div className="md:text-7xl text-4xl font-bold py-6 uppercase text-[#FFFE98]">
              Hollywood Book Reviews
            </div>
            <div className="text-gray-400 text-md ">
              <div>Release Date: June 28, 2018</div>
              <div>ISBN: 978-1-64753-717-3</div>
              <div>Page Count: 46</div>
              <div>Publisher: URLink Print & Media, LLC</div>
              <div>Reviewed by: Allison Walker</div>
            </div>
            <div className="text-gray-300 text-xl my-4 ">
              {" "}
              "Limericks are playful and humorous rhyming poems that follow a
              strict rhyming structure and cadence."
            </div>

            <div className="text-gray-300 text-lg border-l-4 pl-4 border-[#FFFE98] ml-8">
              Limericks have long held a spot in the hearts of children and
              adults alike for their playful themes and strict structure, which
              makes them all the more joyful to read, and poet James B.
              Anstead’s collection is no exception. Anstead’s collection of
              limericks, titled Around the World in Five Lines, is a fun and
              funny assembly. The title of the collection is called “Around the
              World in Five Lines” because each limerick is about a person from
              a different city doing something silly or being caught in an
              outlandish predicament.
              <br /> <br />
              Limericks are playful and humorous rhyming poems that follow a
              strict rhyming structure and cadence. The first, second and fifth
              lines must have seven to ten syllables, share the same verbal
              rhythm, and must rhyme. Likewise, the third and fourth lines must
              have five to seven syllables, and must have the same rhythm and
              rhyme. Creating a poem which follows these rules is difficult,
              making a poem that follows these rules and is genuinely funny is
              even harder still. Anstead nails it. Clever and funny, Around the
              World in Five Lines is an absolute delight. While the collection
              may not be altogether geographically accurate, it’s not altogether
              inaccurate, either. Who’s to say that certain aggressive soccer
              players from Mauritius aren’t accused of being too vicious and,
              concerning their style of play, wouldn’t claim those rumors were
              downright pernicious.
              <br /> <br />
              The purpose of the limerick is to be whimsical and funny and at
              this Anstead succeeds page after page. Some of his limericks are
              downright laugh-out-loud funny; for example, “An extremely vain
              woman from Laos/ Was quite proud of her polka-dot blouse./ Her
              friend said, ‘My thoughts with you I’ll share./ If that were the
              only thing I had to wear,/ I wouldn’t step out of the house.’”
              Anstead knows how to use a clever one-liner to crack a punchline
              and he does so again and again. Some of the vocabulary must have
              been a challenge to include or find a rhyme for; such as, “An
              aspiring young thespian from Belfast/ In his first role was sorely
              miscast./ He was required to play a tough Brooklyn rogue./
              However, after hearing his thick Irish brogue,/ The audience was
              left utterly aghast.”
              <br /> <br />
              There is no age at which you cannot enjoy a limerick. Around the
              World in Five Lines is a joy to indulge oneself in and, as such,
              it demands to be shared. It’s impossible to imagine any reader who
              wouldn’t find a smile on their face upon reading Anstead’s Around
              the World in Five Lines.
            </div>
            <div className="text-lg my-4">
              Source :{" "}
              <a
                className=" cursor-pointer text-blue-600 font-bold"
                target="_Blank"
                href="https://www.hollywoodbookreviews.com/around-the-world-in-five-lines/"
              >
                www.hollywoodbookreviews.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-7xl font-bold py-6 text-white text-right">
              Amazon
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {review.map((item, index) => {
                return (
                  <div
                    className="border-r-2 border-b-2 rounded-lg p-6 italic "
                    key={index}
                  >
                    <div className="flex">
                      {" "}
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                      <IconContext.Provider
                        value={{ color: "#FF9900", size: "1.5em" }}
                      >
                        <AiFillStar />
                      </IconContext.Provider>
                    </div>

                    <div className="text-gray-300 ">"{item.message}"</div>
                    <div className="font-semibold">
                      -{item.creator}{" "}
                      <span className="text-[#FF9900]">Amazon Reviews</span>{" "}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
