import Button from "@/components/Button";
import FeaturedCard from "@/components/FeaturedCard";
import FeaturedCardSm from "@/components/featuredCardSm";
import ProductCard from "@/components/ProductCard";
import SideNewsletter from "@/components/SideNewsletter";

export default function Portfolio() {
  return (
    <>
      <main>
        <section className="h-[75vh] flex flex-col justify-center md:w-1/2">
          <div className="p-5">
            <h6>Tagline</h6>
            <h3>Featured</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi
              eum voluptatibus corporis ipsa quisquam sequi dolorum impedit
              dolore dolor, voluptas laborum corrupti in harum reiciendis
              molestiae commodi odit numquam.
            </p>
          </div>
        </section>
        <section>
          <div className="p-5">
            <h6>Tagline</h6>
            <h3>Featured</h3>
          </div>
          <div className="grid md:grid-cols-2 md:grid-rows-3 gap-7 min-h-screen w-full p-5">
            <div className="md:row-span-3  md:col-span-1">
              <FeaturedCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="md:row-span-1  md:col-span-1">
              <FeaturedCardSm
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="md:row-span-1  md:col-span-1">
              <FeaturedCardSm
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="md:row-span-1  md:col-span-1">
              <FeaturedCardSm
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="p-5">
            <h6>tagline</h6>
            <h3>Featured Products</h3>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 gap-y-12 w-full p-5">
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
          </div>
        </section>
        <section className="h-[50vh]">
          <SideNewsletter />
        </section>
        <section>
          <div className="p-5">
            <h6>Tagline</h6>
            <h3>Catagory Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              obcaecati alias possimus ut quae, mollitia saepe in labore eveniet
              provident, eum deserunt sint architecto vel magnam at est ea enim.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 gap-y-12 w-full p-5">
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="p-5">
            <h6>Tagline</h6>
            <h3>Catagory Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              obcaecati alias possimus ut quae, mollitia saepe in labore eveniet
              provident, eum deserunt sint architecto vel magnam at est ea enim.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 gap-y-12 w-full p-5">
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="p-5">
            <h6>Tagline</h6>
            <h3>Catagory Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              obcaecati alias possimus ut quae, mollitia saepe in labore eveniet
              provident, eum deserunt sint architecto vel magnam at est ea enim.
            </p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 gap-y-12 w-full p-5">
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
            <div className="col-span-1">
              <ProductCard
                image=""
                catagory="catagory"
                title="title"
                description="description"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 min-h-screen p-5">
          <div className="flex flex-col">
            <h6>Tagline</h6>
            <h3>Invite Customers to try our Products</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              incidunt deleniti, commodi corporis quibusdam distinctio provident
              veniam tempora officiis! Perspiciatis amet dolorem eum voluptate
              velit facilis sunt repellendus minima a?
            </p>
            <div className="flex gap-3">
              <Button
                text="Get Started"
                buttonSize=""
                buttonStyle="btn--primary"
                type="button"
              />
              <Button
                text="Learn More"
                buttonSize=""
                buttonStyle="btn--secondary"
                type="button"
              />
            </div>
          </div>
          <div className="bg-slate-500 h-full w-full"></div>
        </section>
      </main>
    </>
  );
}
