import featureImg from '../../assets/home-1.jpg';
import Hader from "../HaderFooter/Hader";

const Home = () => {
  return (
    <div>
      <Hader />
      <div className="bg-gray-400 min-h-screen mx-auto">
        <div>
          {/* This is for featured news */}
          <div class="grid md:grid-cols-1 grid-cols-2 gap-4">
            <div class="basis-3/4 ">
              <div className='w-48'>
                <img src={featureImg} alt="" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, numquam consectetur fuga incidunt veritatis eius amet doloremque possimus, perferendis ducimus, ex animi minus aperiam minima adipisci culpa quaerat? Nisi, tenetur!</p>
              </div>
            </div>
            <div className="basis-1/4">
              <div class="... bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloremque ipsam quo tempora aliquam saepe laudantium odio est. Quos iure error nisi? Dolorem molestiae rem libero dolores esse temporibus beatae commodi nemo vel. At sunt molestias, dolores aliquam odit nam.</div>
              <div class="... bg-white">02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
