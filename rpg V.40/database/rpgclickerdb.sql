-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2024 at 12:28 PM
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
-- Table structure for table `avatar`
--

CREATE TABLE `avatar` (
  `avatarId` int(11) NOT NULL,
  `avatarImgLink` varchar(30) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avatar`
--

INSERT INTO `avatar` (`avatarId`, `avatarImgLink`, `gender`) VALUES
(0, 'img\\kurocode.png', 'genderless'),
(1, 'img\\base_character.png', 'genderless'),
(2, 'img\\base_character.png', 'female'),
(3, 'img\\base_character.png', 'male');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `userLv` int(4) NOT NULL DEFAULT 1,
  `exp` int(20) NOT NULL DEFAULT 0,
  `amountPulled` int(6) NOT NULL DEFAULT 0,
  `weaponId` int(11) NOT NULL DEFAULT 0,
  `avatarId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `username`, `email`, `passwordText`, `gender`, `maxHealth`, `currentHealth`, `gold`, `userLv`, `exp`, `amountPulled`, `weaponId`, `avatarId`) VALUES
(29, 'testAccount', 'testAccount@email.com', '$2y$10$Eucz5PuQIZtgFQ6Dp9ArTeWbtkaetGU15sCWP4gOWbZGTEOs44usK', 'male', 100, 100, 0, 1, 0, 0, 109, 3),
(30, 'testAccount2', 'testAccount2@email.com', '$2y$10$VHd4I8WHynsPFym/k8dr.e7BRpRz998ASA5H9KYE5NL08tfO33886', 'female', 100, 100, 0, 1, 0, 0, 144, 2),
(31, 'testAccount3', 'testAccount3@email.com', '$2y$10$9ut3NC7y8DU9Usb41uj9yuUUNs2snSgoWl1fxRgQlxCpAyfjiBi7u', 'genderless', 100, 100, 0, 1, 0, 1, 145, 1);

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
  `sellPrice` int(20) NOT NULL,
  `weaponRarityNum` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `weapon inventory`
--

INSERT INTO `weapon inventory` (`weaponId`, `userId`, `weaponName`, `weaponRarity`, `weaponType`, `weaponPower`, `attackSpeed`, `weaponDurability`, `effect`, `curse`, `worthyness`, `levelUnlock`, `sellPrice`, `weaponRarityNum`) VALUES
(109, 29, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 0),
(112, 29, 'Universal Daggers', 'Universal', 'Daggers', 200, 20, 2475, 'none', 'none', 'unworthy - Universal (Lv.150)', 150, 7920, 0),
(132, 29, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(144, 30, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 0),
(145, 31, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 0),
(146, 31, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 0),
(147, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(148, 31, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 0),
(149, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(150, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(151, 31, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 0),
(152, 31, 'Common Wand of pacifism', 'Common', 'Wand', 13, 10, 125, 'Healer', 'none', 'false', 0, 3, 0),
(153, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(154, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(155, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(156, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(157, 31, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 0),
(158, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(159, 31, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 0),
(160, 31, 'Uncommon Wand of hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 0),
(161, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(162, 31, 'Rare Daggers of perserverance', 'Rare', 'Daggers', 75, 20, 1463, 'Sturdy', 'none', 'false', 0, 989, 0),
(163, 31, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 0),
(164, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(165, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(166, 31, 'Uncommon Wand of perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 0),
(167, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(168, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(169, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(170, 31, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 0),
(171, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(172, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(173, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(174, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(175, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(176, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(177, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(178, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(179, 31, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 0),
(180, 31, 'the vampires Rare Claymore of Lifes', 'Rare', 'Claymore', 450, 3, 1950, 'LifeSteal', 'none', 'false', 0, 1185, 0),
(181, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(182, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(183, 31, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 0),
(184, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(185, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(186, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(187, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(188, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(189, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(190, 31, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 0),
(191, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(192, 31, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 0),
(193, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(194, 31, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 0),
(195, 31, 'Uncommon Wand of perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 0),
(196, 31, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 0),
(197, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(198, 31, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 0),
(199, 31, 'Uncommon Wand of hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 0),
(200, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(201, 31, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 0),
(202, 31, 'Uncommon Wand of perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 0),
(203, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(204, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(205, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(206, 31, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 0),
(207, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(208, 31, 'the vampires Common Wand of Lifeste', 'Common', 'Wand', 13, 10, 125, 'LifeSteal', 'none', 'false', 0, 3, 0),
(209, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(210, 31, 'Rare Claymore', 'Rare', 'Claymore', 450, 3, 1950, 'none', 'none', 'false', 0, 790, 0),
(211, 31, 'Rare Wand of perserverance', 'Rare', 'Wand', 38, 10, 488, 'Sturdy', 'none', 'false', 0, 84, 0),
(212, 31, 'Rare Wand of perserverance', 'Rare', 'Wand', 38, 10, 488, 'Sturdy', 'none', 'false', 0, 84, 0),
(213, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(214, 31, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 0),
(215, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(216, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(217, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(218, 31, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 0),
(219, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(220, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(221, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(222, 31, 'Uncommon Wand of perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 0),
(223, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(224, 31, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 0),
(225, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(226, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(227, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(228, 31, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 0),
(229, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(230, 31, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 0),
(231, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(232, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(233, 31, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 0),
(234, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(235, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(236, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(237, 31, 'Epic War Hammer', 'Epic', 'War Hammer', 400, 5, 1700, 'none', 'none', 'false', 0, 1360, 0),
(238, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(239, 31, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 0),
(240, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(241, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0),
(242, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(243, 31, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 0),
(244, 31, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 0),
(245, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(246, 31, 'Epic Wand of perserverance', 'Epic', 'Wand', 50, 10, 638, 'Sturdy', 'none', 'false', 0, 192, 0),
(247, 31, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 0),
(248, 31, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`avatarId`);

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
  ADD PRIMARY KEY (`userId`),
  ADD KEY `avatarId` (`avatarId`);

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
-- AUTO_INCREMENT for table `avatar`
--
ALTER TABLE `avatar`
  MODIFY `avatarId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=249;

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
