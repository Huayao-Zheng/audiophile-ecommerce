import React from 'react';
import { client } from '../lib/client';
import { Product, Hero, BestGear, Category } from '../components';

const Home = ({ products, bannerData }) => {
  console.log(products);

  return (
    <div className="">
      <Hero />
      <Category />
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore quae sequi rem omnis ex nulla odio
        deserunt, praesentium iusto eius debitis hic perspiciatis eum harum totam doloribus! Modi est
        veritatis rerum aliquam obcaecati. Asperiores, atque? Ab velit ipsa veritatis reprehenderit facilis,
        quis recusandae quibusdam aliquam sit? Error quibusdam modi earum veniam quam ab corrupti fugiat sed
        obcaecati repellendus vitae fugit, enim esse necessitatibus odio ducimus voluptatem praesentium
        temporibus dolor eum? Ullam velit laboriosam consequatur sequi quasi magnam voluptas reprehenderit
        voluptatem repellat, fugiat aspernatur magni, sunt doloribus sint omnis, architecto fuga ducimus
        deserunt atque eos. Corporis voluptates, consectetur natus velit quas ad quo eligendi incidunt
        consequatur minima deserunt. Iste id corporis eius architecto, voluptas iure delectus quam. Iure quis
        asperiores mollitia recusandae totam nostrum magni, dolores, a, odit molestiae voluptas optio qui
        voluptatum nihil! Cumque ullam, expedita quis, optio minima cum eveniet dolorem, eum vel similique
        voluptate perferendis autem eos nisi repellat laudantium. Hic cum nihil commodi tenetur ipsam sint
        cupiditate labore voluptate autem enim molestias quas quos nesciunt neque nam rerum, voluptatum
        laboriosam ab minima, quisquam architecto fugiat totam debitis incidunt. Similique fuga officiis error
        nesciunt praesentium tempore molestiae ex, fugiat mollitia modi officia porro? Officia, est? A
        asperiores enim at sed quam non autem, velit porro ex facilis quas odit cumque repellat quibusdam. Sed
        molestias aliquid voluptatem vel velit numquam dolores quia laboriosam. Quos labore obcaecati mollitia
        cupiditate voluptas enim accusamus nostrum ipsam at tempora! Voluptates ipsam in eligendi temporibus,
        iste quae doloremque quasi assumenda ipsum perspiciatis vitae iure officiis aut aliquam iusto
        consequatur, sed odio. Et nulla at placeat aperiam nesciunt facilis deleniti ad laudantium quod
        obcaecati aliquam, sunt alias qui ipsa cum laborum dolor repellendus. Deserunt, molestias nam error
        doloribus voluptatem deleniti quod iste, non quas distinctio nostrum repellendus aspernatur facere.
        Cum molestias quis inventore maiores tenetur velit maxime illo odio vero? Optio alias voluptatum dolor
        quam odio, dignissimos amet, a error est ipsam accusantium enim! Beatae excepturi enim voluptate
        aspernatur temporibus eligendi dolores saepe. Exercitationem commodi ullam pariatur quos molestiae
        aliquam cumque, fuga fugiat expedita nostrum doloribus qui quibusdam, in adipisci maxime iste
        excepturi? Ex quia expedita illum voluptas iure autem nobis mollitia incidunt saepe consequatur
        provident laborum, dolorem sint velit facere rerum earum, adipisci vero quisquam id consectetur eaque!
        Omnis cupiditate modi consequatur iusto magni accusamus ducimus beatae enim at. Soluta similique
        dolor, aperiam tempore architecto omnis non quidem quis perferendis. Nemo ad quam quis debitis! Culpa
        voluptatum necessitatibus quibusdam et fugiat possimus illum impedit deleniti asperiores enim,
        veritatis quis laboriosam corrupti cumque eos doloremque corporis pariatur quam omnis iure perferendis
        voluptas! Cumque veritatis sint fugiat libero itaque voluptatem tempore, omnis eius velit officiis
        facilis cupiditate nobis amet autem ex eligendi. Ut obcaecati laborum, facilis nesciunt mollitia et
        explicabo culpa harum deleniti sunt odit voluptatem ducimus blanditiis vitae est voluptates! Aut
        perspiciatis adipisci nobis culpa? Doloribus asperiores iure facere quo esse voluptate quos aspernatur
        quis, nesciunt nihil at blanditiis excepturi voluptatibus. Maiores amet nobis incidunt quod blanditiis
        alias corporis unde, fugiat inventore reiciendis totam vitae!
      </p>
      <BestGear />
    </div>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
