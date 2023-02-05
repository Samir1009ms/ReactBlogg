import { Container } from "../home/main-container";
import { AboutImg } from "./photos";
import { Img } from "./img";

export function About() {
  let Aboutimg = AboutImg;
  return (
    <section className="about">
      <div className="about-top">
        <Img class="about-iimg" img={Aboutimg}></Img>
        <Container class="about-txt">
          I’m Amirhossein Meydani <br /> A
          <span className="text-yellow">Backend</span> and
          <span className="text-yellow">Android</span> <br /> Programmer and
          <span className="text-yellow">UI/UX</span> <br />
          Designer
        </Container>
      </div>
      <div className="about-bottom">
        <Container class="about-bottom-text">
          The standard Lorem Ipsum passage, used since the 1500s
        </Container>
        <Container class="about-bottom-text">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Container>
        <Container class="about-bottom-text">
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
          in 45 BC
        </Container>
        <Container class="about-bottom-text">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </Container>
        <Container class="about-bottom-text">
          1914 translation by H. Rackham
        </Container>
        <Container class="about-bottom-text">
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure.
        </Container>
      </div>
    </section>
  );
}
