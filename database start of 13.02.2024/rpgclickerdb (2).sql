-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2024 at 10:14 AM
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
  `weaponId` int(11) DEFAULT NULL,
  `maxHealth` int(10) NOT NULL DEFAULT 100,
  `currentHealth` int(20) NOT NULL DEFAULT 100,
  `gold` int(20) NOT NULL DEFAULT 0,
  `level` int(4) NOT NULL DEFAULT 1,
  `exp` int(20) NOT NULL DEFAULT 0,
  `amountPulled` int(6) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `passwordText`, `gender`, `weaponId`, `maxHealth`, `currentHealth`, `gold`, `level`, `exp`, `amountPulled`) VALUES
(6, 'name2', 'name2@email.com', '$2y$10$ALC5H3SAIQT9MLZLi5yWueVK6UZflqrluCksmcqXGUs6tzIJ8yUyW', 'male', 1, 100, 100, 0, 1, 0, 0),
(14, 'username', 'username@fists.com', '$2y$10$zPrMne3RiSEKSIp8c6fKeu641jGA8UWuuXA8K20MrWgvn4UFDi6Eq', 'male', 14, 100, 100, 0, 1, 0, 0),
(15, 'newUser', 'thisNewUser@email.com', '$2y$10$6ffXBMCW99yZEl.6Ve2MHeg.o9VB95/qTU4P5aMGmJHZ8qh/LZULK', 'male', 16, 100, 100, 0, 1, 0, 0),
(16, 'test16', 'email16@email.com', '$2y$10$.Bhdc8W9l.yVgChWhUyTlO3qpymCuZyJwoLMrIOBPG8BUN2XmZowm', 'male', 17, 100, 100, 0, 1, 0, 0),
(17, '00010001', '00010001', '$2y$10$Y7gFKlpIyHaSLHhE4xIsMuoqYZlMeTpE83rujt.R35tf4i.zXLi0W', 'male', 19, 100, 100, 0, 1, 0, 0),
(18, '00010010', '00010010@email.com', '$2y$10$M2PF.AdFvzL7LN6pnTFJ0e5mbwSL6TETeM1P2gDQ9F3f2ULjMeUuC', 'female', 20, 100, 100, 0, 1, 0, 0),
(22, '00010100', '00010100@email.com', '$2y$10$inzyPITKOvDPTYdwZexHyuX8Xc/zmJw3Q0K7YPazfhp71H37yLVfC', 'male', 25, 100, 100, 0, 1, 0, 0),
(24, 'ugawqs', 'uhfohqffohe@email.com', '$2y$10$i7aaFQTnhR/tZadfAXAllutKUSD6ufx9Ljt93f5tJ1K7iYUCSBJ2W', 'female', 28, 100, 100, 0, 1, 0, 0),
(25, 'TB', 'TB@email.com', '$2y$10$dOQ96bSxBIDcVpbMtxUWXu3mV56.MyXMkNslS.v59YTltzchypXOS', 'female', 30, 100, 100, 0, 1, 0, 0);

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
  `weaponPower` int(20) NOT NULL,
  `attackSpeed` int(20) NOT NULL DEFAULT 0,
  `weaponDurability` int(20) NOT NULL DEFAULT 0,
  `effect` varchar(10) DEFAULT 'none',
  `curse` varchar(12) NOT NULL,
  `worthyness` varchar(50) NOT NULL,
  `sellPrice` int(20) NOT NULL
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
(28, 24, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0),
(30, 25, 'Fists', 'common', 'fists', 1, 5, 1000000000, 'none', 'none', 'worthy', 0);

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
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`weaponId`) REFERENCES `weapon inventory` (`weaponId`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  ADD CONSTRAINT `weapon inventory_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
