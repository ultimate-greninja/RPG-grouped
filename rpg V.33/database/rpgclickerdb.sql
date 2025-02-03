-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 13, 2024 at 04:14 PM
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
  `maxHealth` int(10) NOT NULL DEFAULT 100,
  `currentHealth` int(20) NOT NULL DEFAULT 100,
  `gold` int(20) NOT NULL DEFAULT 0,
  `level` int(4) NOT NULL DEFAULT 1,
  `exp` int(20) NOT NULL DEFAULT 0,
  `amountPulled` int(6) NOT NULL DEFAULT 0,
  `weaponId` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `passwordText`, `gender`, `maxHealth`, `currentHealth`, `gold`, `level`, `exp`, `amountPulled`, `weaponId`) VALUES
(27, 'Admin', 'Admin@adminEmail.com', '$2y$10$nepSFqQtSLV7nvI7wgN.OeRE2uPhWesQzJTel1NtOT8Oyyf9lDYXW', 'male', 100, 100, 0, 1, 0, 0, 33);

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
  `attackSpeed` int(20) NOT NULL DEFAULT 20,
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
(33, 27, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  ADD PRIMARY KEY (`weaponId`),
  ADD UNIQUE KEY `user` (`userId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  ADD CONSTRAINT `weapon inventory_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
