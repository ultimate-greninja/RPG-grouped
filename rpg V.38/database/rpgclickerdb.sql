-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2024 at 01:23 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
-- Table structure for table `enemy`
--

CREATE TABLE `enemy` (
  `enemyId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `enemyRace` varchar(25) NOT NULL,
  `enemyMaxHealth` int(20) NOT NULL,
  `enemyHealth` int(20) NOT NULL,
  `enemyAttack` int(20) NOT NULL,
  `enemyAttackSpeed` int(2) NOT NULL,
  `defeated` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enemy`
--

INSERT INTO `enemy` (`enemyId`, `userId`, `enemyRace`, `enemyMaxHealth`, `enemyHealth`, `enemyAttack`, `enemyAttackSpeed`, `defeated`) VALUES
(3, 29, 'Orc', 200, 189, 20, 5, 0),
(4, 29, 'Kobold', 250, 249, 10, 10, 0);

-- --------------------------------------------------------

--
-- Table structure for table `forging_material_inventory`
--

CREATE TABLE `forging_material_inventory` (
  `forgingMaterialId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `ironite` int(11) NOT NULL DEFAULT 0,
  `steelite` int(11) NOT NULL DEFAULT 0,
  `silverium` int(11) NOT NULL DEFAULT 0,
  `goldforge` int(11) NOT NULL DEFAULT 0,
  `platinum` int(11) NOT NULL DEFAULT 0,
  `mythril` int(11) NOT NULL DEFAULT 0,
  `stardustium` int(11) NOT NULL DEFAULT 0,
  `etherium` int(11) NOT NULL DEFAULT 0,
  `celestium` int(11) NOT NULL DEFAULT 0,
  `astralium` int(11) NOT NULL DEFAULT 0,
  `omniite` int(11) NOT NULL DEFAULT 0,
  `numinite` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `forging_material_inventory`
--

INSERT INTO `forging_material_inventory` (`forgingMaterialId`, `userId`, `ironite`, `steelite`, `silverium`, `goldforge`, `platinum`, `mythril`, `stardustium`, `etherium`, `celestium`, `astralium`, `omniite`, `numinite`) VALUES
(1, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(3, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `email` varchar(200) NOT NULL,
  `passwordText` varchar(200) NOT NULL,
  `gender` varchar(16) NOT NULL,
  `maxHealth` int(10) NOT NULL DEFAULT 100,
  `currentHealth` int(20) NOT NULL DEFAULT 100,
  `gold` int(20) NOT NULL DEFAULT 0,
  `level` int(4) NOT NULL DEFAULT 1,
  `exp` int(20) NOT NULL DEFAULT 0,
  `amountPulled` int(6) NOT NULL DEFAULT 0,
  `weaponId` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `passwordText`, `gender`, `maxHealth`, `currentHealth`, `gold`, `level`, `exp`, `amountPulled`, `weaponId`) VALUES
(29, 'testAccount', 'testAccount@email.com', '$2y$10$Eucz5PuQIZtgFQ6Dp9ArTeWbtkaetGU15sCWP4gOWbZGTEOs44usK', 'male', 100, 100, 0, 1, 0, 0, 109),
(30, 'testAccount2', 'testAccount2@email.com', '$2y$10$VHd4I8WHynsPFym/k8dr.e7BRpRz998ASA5H9KYE5NL08tfO33886', 'female', 100, 100, 0, 1, 0, 0, 144),
(31, 'testAccount3', 'testAccount3@email.com', '$2y$10$9ut3NC7y8DU9Usb41uj9yuUUNs2snSgoWl1fxRgQlxCpAyfjiBi7u', 'genderless', 100, 100, 0, 1, 0, 0, 145);

-- --------------------------------------------------------

--
-- Table structure for table `weapon inventory`
--

CREATE TABLE `weapon inventory` (
  `weaponId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `weaponName` varchar(35) NOT NULL,
  `weaponRarity` varchar(15) NOT NULL DEFAULT 'common',
  `weaponType` varchar(10) DEFAULT 'none',
  `weaponPower` int(20) NOT NULL,
  `attackSpeed` int(2) NOT NULL DEFAULT 20,
  `weaponDurability` int(20) NOT NULL DEFAULT 0,
  `effect` varchar(10) DEFAULT 'none',
  `curse` varchar(12) NOT NULL,
  `worthyness` varchar(50) NOT NULL,
  `levelUnlock` int(4) NOT NULL,
  `sellPrice` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weapon inventory`
--

INSERT INTO `weapon inventory` (`weaponId`, `userId`, `weaponName`, `weaponRarity`, `weaponType`, `weaponPower`, `attackSpeed`, `weaponDurability`, `effect`, `curse`, `worthyness`, `levelUnlock`, `sellPrice`) VALUES
(109, 29, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0),
(112, 29, 'Universal Daggers', 'Universal', 'Daggers', 200, 20, 2475, 'none', 'none', 'unworthy - Universal (Lv.150)', 150, 7920),
(132, 29, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34),
(144, 30, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0),
(145, 31, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `enemy`
--
ALTER TABLE `enemy`
  ADD PRIMARY KEY (`enemyId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `forging_material_inventory`
--
ALTER TABLE `forging_material_inventory`
  ADD PRIMARY KEY (`forgingMaterialId`),
  ADD KEY `userId` (`userId`);

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
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enemy`
--
ALTER TABLE `enemy`
  MODIFY `enemyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `forging_material_inventory`
--
ALTER TABLE `forging_material_inventory`
  MODIFY `forgingMaterialId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=146;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `enemy`
--
ALTER TABLE `enemy`
  ADD CONSTRAINT `enemy_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `forging_material_inventory`
--
ALTER TABLE `forging_material_inventory`
  ADD CONSTRAINT `forging_material_inventory_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  ADD CONSTRAINT `weapon inventory_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
