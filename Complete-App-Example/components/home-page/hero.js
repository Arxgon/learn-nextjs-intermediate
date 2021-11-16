import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/me.jpg" alt="me" width={300} height={300} />
      </div>
      <h1>Hi, I'm Iqbal</h1>
      <p>Trying to be frontend web developer</p>
    </section>
  );
}

export default Hero;
