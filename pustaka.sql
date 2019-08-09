-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 05, 2019 at 10:57 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pustaka`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `nama_kategori` varchar(111) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `nama_kategori`) VALUES
(1, 'tips n trick'),
(2, 'komik'),
(3, 'novel'),
(4, 'buku sekolah'),
(5, 'majalah'),
(6, 'buku anak anak'),
(7, 'buku dewasa'),
(8, 'pengetahuan umum');

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `id_buku` int(11) DEFAULT NULL,
  `id_peminjam` int(11) NOT NULL,
  `lama_pinjam` decimal(65,0) NOT NULL,
  `tanggal_pinjam` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tanggal_kembali` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id`, `id_buku`, `id_peminjam`, `lama_pinjam`, `tanggal_pinjam`, `tanggal_kembali`) VALUES
(2, 12, 4, '2', '2019-07-20 04:12:30', '2019-07-23 04:29:11.000000'),
(3, 15, 7, '2', '2019-07-20 04:12:30', '2019-07-31 06:03:56.378000'),
(12, 13, 3, '3', '2019-07-20 18:12:42', '2019-07-23 04:38:31.000000'),
(13, 14, 7, '4', '2019-07-21 03:34:14', '2019-07-31 06:04:16.619000'),
(14, 14, 3, '12', '2019-07-26 10:09:56', '2019-07-09 17:00:00.000000'),
(17, 21, 10, '12', '2019-07-26 20:36:29', '2019-07-30 12:06:47.289000'),
(21, 16, 18, '2', '2019-07-30 06:40:57', '2019-07-30 12:09:21.699000'),
(24, 21, 10, '1', '2019-07-30 12:32:19', '2019-08-01 06:07:21.801000'),
(25, 19, 16, '1', '2019-07-31 02:37:55', '2019-07-31 06:12:05.362000'),
(26, 17, 18, '11', '2019-07-31 11:36:20', '2019-08-01 06:08:30.156000'),
(27, 18, 10, '1', '2019-07-01 15:33:01', '2019-08-01 13:55:54.577000'),
(28, 12, 3, '1', '2019-07-31 16:03:42', NULL),
(31, 15, 4, '1', '2019-07-31 16:21:52', NULL),
(32, 21, 20, '1', '2019-07-31 16:24:44', '2019-08-04 11:43:16.336000'),
(43, 14, 3, '4', '2019-07-29 16:49:05', '2019-08-01 06:02:11.510000'),
(44, 13, 10, '3', '2019-08-02 06:59:33', NULL),
(45, 50, 7, '1', '2019-08-05 08:39:08', '2019-08-05 08:40:23.062000'),
(46, 18, 7, '2', '2019-07-09 15:46:05', '2019-08-05 15:47:28.235000');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `id_library` int(11) NOT NULL,
  `nama_buku` varchar(111) DEFAULT NULL,
  `pengarang` varchar(111) DEFAULT NULL,
  `lokasi` varchar(111) DEFAULT NULL,
  `id_kategori` int(11) NOT NULL DEFAULT '1',
  `status_pinjam` varchar(111) DEFAULT 'tersedia',
  `foto_sampul` text,
  `deskripsi` text,
  `donator` int(111) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`id_library`, `nama_buku`, `pengarang`, `lokasi`, `id_kategori`, `status_pinjam`, `foto_sampul`, `deskripsi`, `donator`, `created_at`, `updated_at`) VALUES
(12, 'qurotul uyunsa', 'santri', 'pesantren', 6, 'tidak tersedia', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/7/10/35259623/35259623_32f1a079-7bdc-4fc8-9b33-cd9a736646f4_1388_2057.jpg', 'buku sakti ehemssaaaaaaaa', 0, '2019-07-31 14:51:16.000000', '2019-07-31 14:51:16.000000'),
(13, 'Bisnis Rumahan', 'masako mothhjo', 'jepang', 8, 'tidak tersedia', 'https://lh3.googleusercontent.com/-ZHgA-EyV1gw/Vu4uq23paHI/AAAAAAAALJg/fMvX-aPfNXE/s1600/20160320_115004-1.jpg', 'Menayajikan berbagai hasssl penting yang wajib diketahui seputar dunia usaha mikro, kecil, dan menengah (UMKM), buku ini juga...  - membahas bisnis rumahan secara tuntas, mulai dari memotivasi, menginovasi, menggali ide bisnis, membuat usaha, menganalisis usaha, cara memproduksi, mesin-mesin produksi, hingga teknik pemasaran baik secara online maupun offline.  - memaparkan penyebab kegagalan dalam menggeluti bisnis UKM dan kesalahan-kesalahan yang sering terjadi dalam pemasaran produk.  - memberikan tip-tip praktis untuk mengatasi kegagalan dan kesalahan yang terjadi.  - memuat contoh-contoh ide usaha rumahan yang dapat digunakan untuk membuat usaha kuliner.  Sangat cocok bagi Anda yang ingin terjun dalam dunia bisnis rumahan', 0, '2019-06-28 07:51:40.248858', '2019-06-28 07:51:40.248858'),
(14, 'proggramming for dummies', 'bill gates', 'garasi', 1, 'tersedia', 'https://images-na.ssl-images-amazon.com/images/I/51NWuQorCiL._SX395_BO1,204,203,200_.jpg', 'belaajar pengmrograman', 0, '2019-06-30 17:00:00.000000', '2019-06-30 17:00:00.000000'),
(15, 'ada humor di laptop tukullll', 'tukul arwanaaaa', 'trans 7', 4, 'tidak tersedia', 'https://s1.bukalapak.com/img/1376723649/original/20190422_174249_HDR.jpg', 'Terus terang aja buku ini hanya suatu catatan kecil saya dengan mas Ius yang lama tersimpan. Kisah-kisah licu di buku ini ada yang benar-benar terjadi, tapi ada juga yang dibumbui dengan suatu yang fiktif, dramatis mencekam, dan puitis agar menarik untuk dibaca. Tapi terlepas dari kejaran popularitas, ditanggung kisah ini bukan untuk mengada-ada apalagi diada-adain. Yang jelas kisah lucu ini, diharapkan bisa menghibur dan membawa manfaat bagi Anda. Viva humor dan pelawak Indonesia! Salam puas, Tukul Arwana', 0, '2019-07-17 10:59:33.608031', '2019-07-17 10:59:33.608031'),
(16, 'kiat sukses poligami', 'Om Om beristri 9', 'jakarta', 3, 'tersedia', 'https://s2.bukalapak.com/img/2001768992/w-1000/IMG_20180805_133340.jpg', 'Berdasarkan fakta sejarah, praktek poligami sebenarnya sudah dilakukan oleh umat sebelum datangnya agama Islam. Ketika Islam datang, aturan tentang poligami muncul dalam rangka menyempurnakan syari’ah sebelumnya sekaligus untuk mengatur, membatasi dan memberikan suatu solusi bagi kebutuhan biologis manusia. Meski Islam memberi peluang bagi kaum pria untuk berpoligami, namun peluang tersebut sangat terbatas dan hanya dapat diberikan jika seseorang mampu berbuat adil dalam arti yang sebenar-benarnya. Oleh karena keadilan bukanlah sesuatu hal yang mudah untuk dilakukan, dapat disimpulkan bahwa meski Islam membolehkan poligami tetapi kecenderungan utamanya adalah monogami.', 0, '2019-07-17 10:59:35.853869', '2019-07-17 10:59:35.853869'),
(17, 'hukum yuris predensi', 'alexander sunarto', 'jakarta', 3, 'tersedia', 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/8/26/21899690/21899690_4d43236a-c7be-4ddb-8782-9d90c31f947a_300_471.jpg', ' Mengapa hukum yurisprudensi harus dipandang sangat penting? Mengapa hukum yurisprudensi harus dipandang sebagai norma hukum baru yang mulia, dan harus ditaati untuk dijalankan secara sukarela? Produk hukum yurisprudensi yang ditemukan hakim di persidangan merupakan temuan kasus hukum yang memiliki nilai akademik yang dilahirkan oleh philosopher judge. Hukum yurisprudensi juga harus dipandang sebagai data primer oleh legislator di DPR dalam proses pengumpulan data dan analisis data suatu perundang-undangan yang akan dibentuk', 0, '2019-07-17 10:59:52.205037', '2019-07-17 10:59:52.205037'),
(18, 'dari sosialis untuk komunis', 'DN.aidit ', 'blitar', 3, 'tersedia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9LkUnbp0k6SZQjQAcDJ7300j3cPcbsD3Xhc8PXtFmP9UcoQ6', 'Tulisan jang disadjikan dalam bentoek brosoer ini adalah turunan surat terbuka dari Pemimpin PARTAI SOSIALIS PRAJA (India) jang terkenal, jaitu kawan JAYAPRAKASH NARAJAN, kepada Kaum KOMUNIS India. Surat tersebut telah dimuat di dalam Mimbar Politik SIKAP berturut-turut nomor 48 dan 49 tahun IX masing-masing pada tanggal 17 dan 24 Desember 1956.', 0, '2019-07-17 10:59:52.516161', '2019-07-17 10:59:52.516161'),
(19, 'step by step astral projection', '8case of death ', 'dunia lain', 8, 'tersedia', 'https://html2-f.scribdassets.com/ogh94tm68sazef/images/1-aa7825637c.jpg', 'Perlu diketahui bahwa \"AstralProjection\" merupakan proses ilmiah tubuh dan otak dan dapat dilakukanSetiap manusia. jika agan coba browse ke internet lewat \"Mbah Google\" mengenai AP atau OOBE,maka agan pasti akan menemukan bahwa proses \"AP\" tidak hanya bisa dilakukan oleh orang Asia,tetapi juga Orang dari benua eropa, amerika, afrikapun bisa melakukan proses ini dengan istilah yangberbeda', 0, '2019-07-17 10:59:53.155462', '2019-07-17 10:59:53.155462'),
(20, 'tafsir mimpi', 'togel master', 'rumah', 1, 'tersedia', 'https://image.winudf.com/v2/image/Y29tLmJ1a3V0YWZzaXJtaW1waXRvZ2VsMmQuYWxhaHphcmFwcHNfc2NyZWVuXzFfMTUyNzkxNDg2M18wMzM/screen-1.jpg?fakeurl=1&type=.jpg', 'Tafsir mimpi adalah sebuah aplikasi yang memuat tentang ilmu yang sangat populer, menggunakan beberapa metode yang dapat membantu menemukan nomo tafsir 2D/ Tafsir 3D. Lengkap dan praktis sesuai keinginan para master dan pecinta tafsir mimpi akurat untuk bermain togel. Aplikasi Kajian Tafsir mimpi jitu adalah sebuah buku yang memuat kumpulan tafsir semua mimpi yang begitu lengkap, Anda bisa menggunakan buku ini untuk menemukan sebuah arti mimpi yang kemungkinan bisa mendatangkan sebuah kepercayaan tersendiri bagi anda.', 0, '2019-07-18 06:33:17.340162', '2019-07-18 06:33:17.340162'),
(21, 'The Power Of KUNDALINI', 'dukun', 'rumah', 1, 'tersedia', 'https://s2.bukalapak.com/img/72481393/large/The_Power_of_Kundalini_M1.jpg', 'Manusia diberi anugerah Tuhan berupa daya kosmis untuk keperluan manusia itu sendiri. Inilah inti dari kundalini itu, yakni pengaktifan daya batin untuk mewujudkan impian-impian dan keajaiban-keajaiban dalam hidup ini. Impian itu bisa dalam hal kesuksesan keuangan, kehidupan pernikahan, kesehatan, menghadapi persaingan, rutinitas keseharian, dan sebagainya.', 0, '2019-07-18 07:43:03.906164', '2019-07-18 07:43:03.906164'),
(35, 'kontol\n', 'asddas', 'asdasd', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-03T16:46:14.379Zmodal log.png', 'sadasdasd', NULL, '2019-08-03 16:46:14.381023', '2019-08-03 16:46:14.381023'),
(36, 'kontol\n', 'asddas', 'asdasd', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-03T16:51:15.362Zmodal log.png', 'sadasdasd', NULL, '2019-08-03 16:51:15.367476', '2019-08-03 16:51:15.367476'),
(38, 'kontol\n', 'asddas', 'asdasd', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-03T16:58:12.902Zmodal log.png', 'sadasdasd', NULL, '2019-08-03 16:58:12.912060', '2019-08-03 16:58:12.912060'),
(40, 'kontol\n', 'asddas', 'asdasd', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-03T17:27:46.478Ztb detail.png', 'sadasdasd', NULL, '2019-08-03 17:27:46.484065', '2019-08-03 17:27:46.484065'),
(41, NULL, NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T02:00:11.121ZScreenshot from 2019-07-10 09-23-16.png', NULL, NULL, '2019-08-04 02:00:11.129938', '2019-08-04 02:00:11.129938'),
(42, NULL, NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:22:31.469ZScreenshot from 2019-07-10 09-26-25.png', NULL, NULL, '2019-08-04 03:22:31.481628', '2019-08-04 03:22:31.481628'),
(43, NULL, NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:22:48.813ZScreenshot from 2019-07-10 09-26-25.png', NULL, NULL, '2019-08-04 03:22:48.814885', '2019-08-04 03:22:48.814885'),
(44, NULL, NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:23:45.570ZScreenshot from 2019-08-03 17-54-30.png', NULL, NULL, '2019-08-04 03:23:45.572890', '2019-08-04 03:23:45.572890'),
(45, NULL, NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:23:46.292ZScreenshot from 2019-08-03 17-54-30.png', NULL, NULL, '2019-08-04 03:23:46.293422', '2019-08-04 03:23:46.293422'),
(46, 'haha', NULL, NULL, 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:35:35.033Ztb detail.png', NULL, NULL, '2019-08-04 03:35:35.036930', '2019-08-04 03:35:35.036930'),
(47, 'aa', NULL, 'undefined', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:38:24.470ZScreenshot from 2019-08-04 10-37-36.png', NULL, NULL, '2019-08-04 03:38:24.472817', '2019-08-04 03:38:24.472817'),
(48, 'test', NULL, 'test', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T03:39:12.951ZScreenshot from 2019-08-04 10-37-36.png', NULL, NULL, '2019-08-04 03:39:12.954801', '2019-08-04 03:39:12.954801'),
(49, 'aa', NULL, 'aa', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T04:18:47.265ZScreenshot from 2019-07-29 20-36-21.png', NULL, NULL, '2019-08-04 04:18:47.282461', '2019-08-04 04:18:47.282461'),
(50, 'buku apa saja ', 'doraemon', 'jepang', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T04:24:01.028ZScreenshot from 2019-08-04 10-37-36.png', 'aaaaaa', NULL, '2019-08-04 04:24:01.031918', '2019-08-04 04:24:01.031918'),
(52, 'a', 'a', 'a', 1, 'tersedia', 'http://localhost:5000/uploads/2019-08-04T04:57:49.767ZScreenshot from 2019-07-29 20-36-21.png', 'a', NULL, '2019-08-04 04:57:49.781263', '2019-08-04 04:57:49.781263');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `email` varchar(111) DEFAULT NULL,
  `password` text,
  `telepon` decimal(65,0) NOT NULL,
  `background` varchar(111) DEFAULT NULL,
  `fullname` varchar(51) NOT NULL,
  `alamat` varchar(111) NOT NULL,
  `foto` text NOT NULL,
  `salt` text,
  `token` text,
  `status` varchar(111) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `email`, `password`, `telepon`, `background`, `fullname`, `alamat`, `foto`, `salt`, `token`, `status`, `created_at`, `updated_at`) VALUES
(3, 'matt@solar.com', '00fd53f8d4fb3e33284eae312d397f478069b42080499d9e35a5deada48b9c07d16755c4bb5ea566ac4b37d4ecefee99a7a3940f4434fa7e338c6d8019cc223a', '628764689877', 'SMP 12 sore', 'bajaybajuri', 'Kemajoran Baru', 'https://notary-pps.unud.ac.id/img/bg/user.jpg', 'ca7a6757862a92c494', '123', 'member', '2019-07-25 00:17:58.375000', '2019-07-25 00:17:58.375000'),
(4, 'anim@lia.com', 'aaa', '898776776578', 'karyawan swasta', 'anie sama lia', 'indonesia', 'https://www.pngkit.com/png/detail/508-5084521_download-female-profile-icon-png-clipart-computer-icons.png', 'a46af0c2e5de1abf5e', 'Test', 'member', '2019-07-25 01:47:34.415000', '2019-07-25 01:47:34.415000'),
(7, 'wewe@gombel.com', '123', '6281345678', 'hantu', 'wewe gombelelel', 'cilandak', 'https://einblick.ms-persoenlich.de/sites/default/files/styles/profile/public/pictures/2017-11/einblick_profil_dummy_male_2x_4_5.png', NULL, NULL, NULL, '2019-07-31 14:55:47.000000', NULL),
(10, 'wadas@tawas.com', '74e4ee327f3e017fd0c5b489faf1ce10678cc964aa36691939012b73b9288c0e56f685037f80fa37c17fdbfafdd574a6332cd03891b7a476261202a836770766', '62219876544', 'pelajar', 'wadas tawas', 'wadas lintang', 'http://indonesiait.com/public/testimoni_image/thumb/crop_dummy_5.png', '2deeec0cb6de2cf0a7', 'Test', 'member', '2019-07-26 11:33:11.637000', '2019-07-26 11:33:11.637000'),
(15, 'wik@wiks.com', '2d2b9a3c3fa0cd6012e38901865d56a411d46a2db34682771ace1ff14569bbacd191cb3dde13b014672977fded802ca2428b46d9d2aa7865cfcb9d0d087e7b91', '6277655476', 'sma', 'wikwikahh', 'thailand', 'https://avatars0.githubusercontent.com/u/40992581?s=460&v=4', '88799d478d644e4996', 'Test', 'member', '2019-07-26 11:49:44.329000', '2019-07-26 11:49:44.329000'),
(16, 'reqa@gmail.com', '69d9645115131950f251768884d61c40c2311631f3a9d9c9d6aec268dbc2b11e858bbe4008056f1776e063ef5b5d342a16e6d9ac8d06b689f61c096edbd8a295', '62887234698765', 'pekerja kantoran', 'reqa', 'kalijodo', 'https://i0.wp.com/www.extremelinellc.com/wp-content/uploads/2017/05/1.png?resize=802%2C720', 'ae126dc29059e6f8bc', 'Test', 'member', '2019-07-26 14:50:48.627000', '2019-07-26 14:50:48.627000'),
(18, 'alex@sander.com', '8c073de8a53b9567bb31a17f5cd8f677c910c655a32841c03ed51a7bae2f8c9419b256f1d1a5452b0477463e8f588b59aae6932ab6867434405576192e27f4cb', '62129368748', 'pelajar', 'alexander ngatino', 'bintaro', 'https://banner2.kisspng.com/20180622/ryh/kisspng-youtube-user-clip-art-bacon-ham-5b2c8d22dfed87.4850287715296463709172.jpg', 'd79d339c1945a1815a', 'Test', 'admin', '2019-07-27 03:12:52.156000', '2019-07-27 03:12:52.156000'),
(19, 'jenifer@yahoo.com', 'cfd7bec4f81aefa2c99e780aa09508e8d99f13b22cb9e16e28f47a25e93f9d20fa3ace2ec777adb7e9f537c3f94d468fe7ad3be9b7ae3d418b67bbbef4cf7a9f', '62889386488', 'mahasiswa', 'jenifer sutinnah', 'rempoa', 'https://wrappixel.com/demos/admin-templates/pixeladmin/plugins/images/users/1.jpg', '0af271a8001272edb4', 'Test', '1', '2019-07-30 06:25:13.290000', '2019-07-30 06:25:13.290000'),
(20, 'suratman@kinson.com', 'b8c17a23c562d8ca26f71526f888e2ffe093dd7de429d6aed1ddf7154f157fc6dcd4d4074d9f1e718a1bdd1063b6004313072e97a7bef5eb26541c68f20264cf', '6289876554867', 'pengajar', 'suratman atkinson', 'pal merah', 'http://www.sfb902.de/wp-content/uploads/2016/01/dummy-user_1366220506.jpg', 'c1011344d4370abab0', 'Test', '1', '2019-07-30 07:02:17.115000', '2019-07-30 07:02:17.115000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`id_library`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `id_library` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
