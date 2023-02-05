import { Text } from "./journey-text";
import { Rcont } from "./journeyRcont";
export function JourneyContLeft() {
  let imgx = [{ src: require("../../img/journey.svg").default }];
  return (
    <div className="journey-left">
      <div className="left-text">
        <img src={imgx[0].src} alt="" />
      <div className="top-text">
      <Text class="name">
          The resolution, What am <br /> I gonna do?
        </Text>
        <Text class="text">
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been <br /> the industry's
          standard
        </Text>
      </div>
      </div>
      <div className="left-txt">
        <Text class="txt">
          The standard Lorem Ipsum passage, used since the 1500s <br />
          <br />
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
          <br />
          <br />
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
          in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
          <br />
          <br />
          1914 translation by H. Rackham "But I must explain to you how all this
          mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system, and expound the actual
          teachings of the great explorer of the truth, the master-builder of
          human happiness. No one rejects, dislikes, or avoids pleasure itself,
          because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful. Nor again is there anyone
        </Text>
      </div>
    </div>
  );
}

export function JourneyContRight() {
  return (
    <div className="journey-right">
      <Text class="right-name">Time Line</Text>
      <select className="selected">
        <option className="option" value="">2021</option>
        <option className="option" value="">2022</option>
        <option className="option" value="">2023</option>
      </select>
      <Rcont
        date="2 January 2021"
        class="cont"
        p1="top"
        p2="bottom"
        text="The resolution, What am i gonna do?"
      >
        It’s all about the new year and works i have to do
      </Rcont>
      <Rcont
        date="29 January 2021"
        class="cont"
        p1="top"
        p2="bottom"
        text="Gow - command line tool to manage works"
      >
        Gow is cli tool written in golang using cobra
      </Rcont>
      <Rcont
        date="2 February 2021"
        class="cont"
        p1="top"
        p2="bottom"
        text="Started designing what you are seeing right now! "
      >
        Yes in 2th of february i started designing this site
      </Rcont>
      <Rcont 
        date="1 March 2021" 
        class="cont" 
        p1="top"
        p2="bottom"
        text=" Maybe it’s time to deploy...! "
        >
        Maybe in this day i completed the front and backend of this
      </Rcont>
    </div>
  );
}
