-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2024 at 04:19 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rpgclickerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `passwordText` varchar(200) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `weaponId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `passwordText`, `gender`, `weaponId`) VALUES
(6, 'name2', 'name2@email.com', '$2y$10$ALC5H3SAIQT9MLZLi5yWueVK6UZflqrluCksmcqXGUs6tzIJ8yUyW', 'male', 1),
(14, 'username', 'username@fists.com', '$2y$10$zPrMne3RiSEKSIp8c6fKeu641jGA8UWuuXA8K20MrWgvn4UFDi6Eq', 'male', 14),
(15, 'newUser', 'thisNewUser@email.com', '$2y$10$6ffXBMCW99yZEl.6Ve2MHeg.o9VB95/qTU4P5aMGmJHZ8qh/LZULK', 'male', 16),
(16, 'test16', 'email16@email.com', '$2y$10$.Bhdc8W9l.yVgChWhUyTlO3qpymCuZyJwoLMrIOBPG8BUN2XmZowm', 'male', 17),
(17, '00010001', '00010001', '$2y$10$Y7gFKlpIyHaSLHhE4xIsMuoqYZlMeTpE83rujt.R35tf4i.zXLi0W', 'male', 19),
(18, '00010010', '00010010@email.com', '$2y$10$M2PF.AdFvzL7LN6pnTFJ0e5mbwSL6TETeM1P2gDQ9F3f2ULjMeUuC', 'female', 20),
(22, '00010100', '00010100@email.com', '$2y$10$inzyPITKOvDPTYdwZexHyuX8Xc/zmJw3Q0K7YPazfhp71H37yLVfC', 'male', 25),
(24, 'ugawqs', 'uhfohqffohe@email.com', '$2y$10$i7aaFQTnhR/tZadfAXAllutKUSD6ufx9Ljt93f5tJ1K7iYUCSBJ2W', 'female', 28);

-- --------------------------------------------------------

--
-- Table structure for table `weapon inventory`
--

CREATE TABLE `weapon inventory` (
  `weaponId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `weaponName` varchar(25) NOT NULL,
  `weaponRarity` varchar(15) NOT NULL DEFAULT 'common',
  `weaponType` varchar(10) DEFAULT 'none',
  `weaponPower` int(11) NOT NULL,
  `attackSpeed` int(11) NOT NULL DEFAULT 0,
  `weaponDurability` int(11) NOT NULL DEFAULT 0,
  `effect` varchar(10) DEFAULT 'none',
  `curse` varchar(12) NOT NULL,
  `worthyness` varchar(50) NOT NULL,
  `sellPrice` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weapon inventory`
--

INSERT INTO `weapon inventory` (`weaponId`, `userId`, `weaponName`, `weaponRarity`, `weaponType`, `weaponPower`, `attackSpeed`, `weaponDurability`, `effect`, `curse`, `worthyness`, `sellPrice`) VALUES
(1, 6, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(14, 14, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(16, 15, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(17, 16, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(19, 17, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(20, 18, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(25, 22, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(28, 0, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `weaponId` (`weaponId`);

--
-- Indexes for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  ADD PRIMARY KEY (`weaponId`),
  ADD UNIQUE KEY `user` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
