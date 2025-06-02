import Layout from "../../layout/layout";

const contactUs = () => {
    return (
  <Layout>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-black p-8 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Address:</h3>
            <p>Noida Sec 23</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email:</h3>
            <p>parasharpratibha17@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone:</h3>
            <p>+91 9898690743</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default contactUs;
