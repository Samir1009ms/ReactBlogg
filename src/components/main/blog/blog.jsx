import { Blogcont } from "./blogcontainer";
const blogimg = [
  require("../../img/blog1.svg").default,
  require("../../img/blog2.svg").default,
  require("../../img/blog3.svg").default,
  require("../../img/blog4.svg").default,
  require("../../img/blog5.svg").default,
];
export function Blog() {
  return (
    console.log(blogimg),
    (
      <main className="blog">
        <section className="blog-container">
        <Blogcont img={blogimg[0]}>
          {"There is more than you know"}
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        </Blogcont>
        <Blogcont img={blogimg[1]}>
          {"There is more than you know"}
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        </Blogcont>{" "}
        <Blogcont img={blogimg[2]}>
          {"There is more than you know"}
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        </Blogcont>{" "}
        <Blogcont img={blogimg[3]}>
          {"There is more than you know"}
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        </Blogcont>{" "}
        <Blogcont img={blogimg[4]}>
          {"There is more than you know"}
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          }
        </Blogcont>
      </section>
      </main>
    )
  );
}
