const About = () => {
  return (
    <div>
      <h2>Tentang Website</h2>
      <hr></hr>
      <p>
        Website ini memberikan contoh mengenai React Router serta
        kunci-kuncinya:
      </p>

      <h3>NavLink</h3>
      <p>
        Menu navigasi menggunakan <code>NavLink</code> alih-alih{" "}
        <code>Link</code> biasa untuk menerapkan gaya khusus pada rute aktif.
        Perhatikan bagaimana tautan halaman saat ini disorot di bilah navigasi.
      </p>

      <h3>Dynamic Routing</h3>
      <p>
        Halaman Pengguna dan Produk menunjukkan perutean dinamis tempat konten
        dimuat berdasarkan parameter URL. Klik pengguna atau produk mana pun
        untuk melihat halaman detailnya.
      </p>

      <h3>Route Parameters</h3>
      <p>
        Halaman detail (seperti <code>/users/1</code> atau{" "}
        <code>/products/101</code>) menggunakan parameter rute untuk menampilkan
        konten tertentu. Parameter ini diakses menggunakan kait{" "}
        <code>useParams</code> dari React Router.
      </p>
    </div>
  );
};

export default About;
