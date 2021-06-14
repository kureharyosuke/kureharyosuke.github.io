const prod = 프로세스.env.NODE_ENV === "생산";

모듈.수출 = {
  "process.env.BACKEND_URL": prod ? "/kureharyosuke.github.io/gh-pages" : "",
};
