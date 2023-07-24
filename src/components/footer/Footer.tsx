import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            maiores mollitia provident numquam voluptas, voluptates ex, tempore
            optio vero odit nobis hic! Cum dolorem alias ratione aliquid
            exercitationem necessitatibus quas!
          </p>
          <p>All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orchi senectus</p>
          <p className="my-5">Massa orchi senectus</p>
          <p>Ullamacorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massa orchi senectus</p>
          <p className="my-5">Massa orchi senectus</p>
          <p>(123)456-7899</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
