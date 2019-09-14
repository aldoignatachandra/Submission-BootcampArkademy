-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Sep 2019 pada 18.30
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_employee`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_category`
--

CREATE TABLE `tb_category` (
  `id_salary` int(11) NOT NULL,
  `salary` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_category`
--

INSERT INTO `tb_category` (`id_salary`, `salary`) VALUES
(1, 10000000),
(2, 12000000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_name`
--

CREATE TABLE `tb_name` (
  `id_employee` int(11) NOT NULL,
  `name_employee` varchar(50) NOT NULL,
  `id_work` int(11) NOT NULL,
  `id_salary` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_name`
--

INSERT INTO `tb_name` (`id_employee`, `name_employee`, `id_work`, `id_salary`) VALUES
(1, 'Rebecca', 1, 1),
(2, 'Vita', 2, 2),
(3, 'Aldo Ignata Chandra', 2, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_work`
--

CREATE TABLE `tb_work` (
  `id_work` int(11) NOT NULL,
  `name_work` varchar(50) NOT NULL,
  `id_salary` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `tb_work`
--

INSERT INTO `tb_work` (`id_work`, `name_work`, `id_salary`) VALUES
(1, 'Frontend Dev', 1),
(2, 'Backend Dev', 2);

-- --------------------------------------------------------

--
-- Stand-in struktur untuk tampilan `view_detail_employee`
-- (Lihat di bawah untuk tampilan aktual)
--
CREATE TABLE `view_detail_employee` (
`name_employee` varchar(50)
,`name_work` varchar(50)
,`salary` int(20)
);

-- --------------------------------------------------------

--
-- Struktur untuk view `view_detail_employee`
--
DROP TABLE IF EXISTS `view_detail_employee`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `view_detail_employee`  AS  select `tb_name`.`name_employee` AS `name_employee`,`tb_work`.`name_work` AS `name_work`,`tb_category`.`salary` AS `salary` from ((`tb_name` join `tb_work`) join `tb_category`) where `tb_work`.`id_work` = `tb_name`.`id_work` and `tb_work`.`id_salary` = `tb_category`.`id_salary` ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tb_name`
--
ALTER TABLE `tb_name`
  ADD PRIMARY KEY (`id_employee`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tb_name`
--
ALTER TABLE `tb_name`
  MODIFY `id_employee` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
