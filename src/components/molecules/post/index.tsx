import Tag from 'components/atoms/tag';

const Post = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl">
            Simple Clothes Basic Tee
          </h1>

          <p className="mt-1 text-sm text-gray-500">By Iceman</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-4">
            <div className="relative mt-4">
              <img
                alt="Tee"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
              />
            </div>

            <ul className="mt-1 flex gap-1">
              <fieldset>
                <div className="mt-2 flex flex-wrap gap-1">
                  <label htmlFor="material_cotton" className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_cotton"
                      name="material"
                      className="peer sr-only"
                      checked
                    />

                    <Tag name={'product review'}></Tag>
                  </label>

                  <label htmlFor="material_wool" className="cursor-pointer">
                    <input
                      type="radio"
                      id="material_wool"
                      name="material"
                      className="peer sr-only"
                      checked
                    />

                    <Tag name={'sample'}></Tag>
                  </label>
                </div>
              </fieldset>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                totam eos iusto repellat blanditiis voluptate aspernatur, quae
                nemo exercitationem cum debitis! Sint consectetur laborum
                tempora repellat odit. Impedit quasi reprehenderit harum illum
                sequi provident soluta cum quisquam odit possimus? Officia illum
                saepe magnam nostrum, officiis placeat iure itaque cumque
                voluptate?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
