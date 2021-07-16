const YEAR = new Date().getFullYear()

export default {
  footer: (
    <section id="comments">
    <h4>
      <a href="">Comments</a>
    </h4>
    <script src="https://utteranc.es/client.js"
      repo="skarthikeyan96/karthi.me"
      issue-term="pathname"
      label="comments"
      theme="github-light"
      crossorigin="anonymous"
      async />
    </section>
  )
}
