-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 05:09 PM
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
(4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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
(32, 'testAccount3', 'testAccount3@email.com', '$2y$10$iXZXho70J9fr3tT5T.bmUe6DRAKz78a7sdwnBkl/k.KtXIx6qVXgW', 'genderless', 100, 100, 9684940, 1, 0, 178, 332, 1);

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
(109, 29, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 1),
(144, 30, 'Fists', 'common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 1),
(249, 32, 'Fists', 'Common', 'fists', 1, 20, 1000000000, 'none', 'none', 'worthy', 0, 0, 1),
(250, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(251, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(252, 32, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 2),
(253, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(254, 32, 'Epic Wand of perserverance', 'Epic', 'Wand', 50, 10, 638, 'Sturdy', 'none', 'false', 0, 192, 4),
(255, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(256, 32, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 3),
(257, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(258, 32, 'Epic Claymore', 'Epic', 'Claymore', 600, 3, 2550, 'none', 'none', 'false', 0, 1836, 4),
(259, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(260, 32, 'Uncommon Wand of perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 2),
(261, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(262, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(263, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(264, 32, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(265, 32, 'Common Wand of perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(266, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(267, 32, 'Mythical Sword', 'Mythical', 'Sword', 300, 10, 1250, 'none', 'none', 'unworthy - Mythical (Lv.50)', 50, 2250, 6),
(268, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(269, 32, 'Epic Daggers', 'Epic', 'Daggers', 100, 20, 1275, 'none', 'none', 'false', 0, 1020, 4),
(270, 32, 'Epic Wand of rot', 'Epic', 'Wand', 50, 10, 425, 'Decay', 'none', 'false', 0, 128, 4),
(271, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(272, 32, 'Common Wand of plague', 'Common', 'Wand', 13, 10, 125, 'Poison', 'none', 'false', 0, 3, 1),
(273, 32, 'Epic Claymore', 'Epic', 'Claymore', 600, 3, 2550, 'none', 'none', 'false', 0, 1836, 4),
(274, 32, 'Rare Claymore', 'Rare', 'Claymore', 450, 3, 1950, 'none', 'none', 'false', 0, 790, 3),
(275, 32, 'Cosmic War Hammer', 'Cosmic', 'War Hammer', 700, 5, 2900, 'none', 'none', 'unworthy - Cosmic (Lv.100)', 100, 7105, 7),
(276, 32, 'Common Wand of rot', 'Common', 'Wand', 13, 10, 125, 'Decay', 'none', 'false', 0, 3, 1),
(277, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(278, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(279, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(280, 32, 'Uncommon Wand of wealth', 'Uncommon', 'Wand', 25, 10, 225, 'Golden', 'none', 'false', 0, 18, 2),
(281, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(282, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(283, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(284, 32, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 3),
(285, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(286, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(287, 32, 'Uncommon Wand of hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 2),
(288, 32, 'Epic Daggers', 'Epic', 'Daggers', 100, 20, 1275, 'none', 'none', 'false', 0, 1020, 4),
(289, 32, 'Rare Claymore', 'Rare', 'Claymore', 450, 3, 1950, 'none', 'none', 'false', 0, 790, 3),
(290, 32, 'Legendary Claymore of perserverance', 'Legendary', 'Claymore', 750, 3, 4725, 'Sturdy', 'none', 'unworthy - Legendary (Lv.25)', 25, 7974, 5),
(291, 32, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 2),
(292, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(293, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(294, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(295, 32, 'Common Wand of zeus', 'Common', 'Wand', 13, 10, 125, 'Shock', 'none', 'false', 0, 3, 1),
(296, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(297, 32, 'Rare Wand of perserverance', 'Rare', 'Wand', 38, 10, 488, 'Sturdy', 'none', 'false', 0, 84, 3),
(298, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(299, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(300, 32, 'Epic Claymore', 'Epic', 'Claymore', 600, 3, 2550, 'none', 'none', 'false', 0, 1836, 4),
(301, 32, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 3),
(302, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(303, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(304, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(305, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(306, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(307, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(308, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(309, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(310, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(311, 32, 'Rare War Hammer', 'Rare', 'War Hammer', 300, 5, 1300, 'none', 'none', 'false', 0, 585, 3),
(312, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(313, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(314, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(315, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(316, 32, 'Legendary War Hammer', 'Legendary', 'War Hammer', 500, 5, 2100, 'none', 'none', 'unworthy - Legendary (Lv.25)', 25, 2625, 5),
(317, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(318, 32, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 3),
(319, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(320, 32, 'Mythical Sword', 'Mythical', 'Sword', 300, 10, 1250, 'none', 'none', 'unworthy - Mythical (Lv.50)', 50, 2250, 6),
(321, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(322, 32, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 3),
(323, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(324, 32, 'Common Wand of Hell', 'Common', 'Wand', 13, 10, 125, 'Burn', 'none', 'false', 0, 3, 1),
(325, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(326, 32, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 2),
(327, 32, 'Uncommon Wand of Hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 2),
(328, 32, 'Cosmic War Hammer', 'Cosmic', 'War Hammer', 700, 5, 2900, 'none', 'none', 'unworthy - Cosmic (Lv.100)', 100, 7105, 7),
(329, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(330, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(331, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(332, 32, 'Cosmic Daggers', 'Cosmic', 'Daggers', 175, 20, 2175, 'none', 'none', 'unworthy - Cosmic (Lv.100)', 100, 5329, 7),
(333, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(334, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(335, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(336, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(337, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(338, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(339, 32, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 2),
(340, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(341, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(342, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(343, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(344, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(345, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(346, 32, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 3),
(347, 32, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 3),
(348, 32, 'Epic Daggers', 'Epic', 'Daggers', 100, 20, 1275, 'none', 'none', 'false', 0, 1020, 4),
(349, 32, 'Rare Claymore', 'Rare', 'Claymore', 450, 3, 1950, 'none', 'none', 'false', 0, 790, 3),
(350, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(351, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(352, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(353, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(354, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(355, 32, 'Uncommon War Hammer', 'Uncommon', 'War Hammer', 200, 5, 900, 'none', 'none', 'false', 0, 180, 2),
(356, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(357, 32, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 3),
(358, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(359, 32, 'Rare Wand of Perserverance', 'Rare', 'Wand', 38, 10, 488, 'Sturdy', 'none', 'false', 0, 84, 3),
(360, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(361, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(362, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(363, 32, 'Epic Sword', 'Epic', 'Sword', 200, 10, 850, 'none', 'none', 'false', 0, 680, 4),
(364, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(365, 32, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 3),
(366, 32, 'Epic Wand of Pacifism', 'Epic', 'Wand', 50, 10, 425, 'Healer', 'none', 'false', 0, 128, 4),
(367, 32, 'Rare Daggers', 'Rare', 'Daggers', 75, 20, 975, 'none', 'none', 'false', 0, 439, 3),
(368, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(369, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(370, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(371, 32, 'Rare Sword of Hell', 'Rare', 'Sword', 150, 10, 650, 'Burn', 'none', 'false', 0, 440, 3),
(372, 32, 'Common Wand of Hell', 'Common', 'Wand', 13, 10, 125, 'Burn', 'none', 'false', 0, 3, 1),
(373, 32, 'Epic Claymore', 'Epic', 'Claymore', 600, 3, 2550, 'none', 'none', 'false', 0, 1836, 4),
(374, 32, 'Legendary Wand of Hell', 'Legendary', 'Wand', 63, 10, 525, 'Burn', 'none', 'unworthy - Legendary (Lv.25)', 25, 249, 5),
(375, 32, 'Epic Sword', 'Epic', 'Sword', 200, 10, 850, 'none', 'none', 'false', 0, 680, 4),
(376, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(377, 32, 'Uncommon Wand of Wealth', 'Uncommon', 'Wand', 25, 10, 225, 'Golden', 'none', 'false', 0, 18, 2),
(378, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(379, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(380, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(381, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(382, 32, 'Cosmic War Hammer', 'Cosmic', 'War Hammer', 700, 5, 2900, 'none', 'none', 'unworthy - Cosmic (Lv.100)', 100, 7105, 7),
(383, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(384, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(385, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(386, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(387, 32, 'Uncommon Wand of Hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 2),
(388, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(389, 32, 'Legendary Claymore', 'Legendary', 'Claymore', 750, 3, 3150, 'none', 'none', 'unworthy - Legendary (Lv.25)', 25, 3544, 5),
(390, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(391, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(392, 32, 'Cosmic Claymore of Perserverance', 'Cosmic', 'Claymore', 1050, 3, 6525, 'Sturdy', 'none', 'unworthy - Cosmic (Lv.100)', 100, 21582, 7),
(393, 32, 'Uncommon Wand of Hell', 'Uncommon', 'Wand', 25, 10, 225, 'Burn', 'none', 'false', 0, 18, 2),
(394, 32, 'Uncommon Wand of Perserverance', 'Uncommon', 'Wand', 25, 10, 338, 'Sturdy', 'none', 'false', 0, 26, 2),
(395, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(396, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(397, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(398, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(399, 32, 'Rare Sword', 'Rare', 'Sword', 150, 10, 650, 'none', 'none', 'false', 0, 293, 3),
(400, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(401, 32, 'Common Sword', 'Common', 'Sword', 50, 10, 250, 'none', 'none', 'false', 0, 13, 1),
(402, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(403, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(404, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(405, 32, 'Epic Daggers of Perserverance', 'Epic', 'Daggers', 100, 20, 1913, 'Sturdy', 'none', 'false', 0, 2297, 4),
(406, 32, 'Legendary Claymore of Hell', 'Legendary', 'Claymore', 750, 3, 3150, 'Burn', 'none', 'unworthy - Legendary (Lv.25)', 25, 5316, 5),
(407, 32, 'Uncommon Claymore', 'Uncommon', 'Claymore', 300, 3, 1350, 'none', 'none', 'false', 0, 243, 2),
(408, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(409, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(410, 32, 'Common Claymore', 'Common', 'Claymore', 150, 3, 750, 'none', 'none', 'false', 0, 34, 1),
(411, 32, 'Rare Wand of Perserverance', 'Rare', 'Wand', 38, 10, 488, 'Sturdy', 'none', 'false', 0, 84, 3),
(412, 32, 'Rare Claymore', 'Rare', 'Claymore', 450, 3, 1950, 'none', 'none', 'false', 0, 790, 3),
(413, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(414, 32, 'Mythical Claymore', 'Mythical', 'Claymore', 900, 3, 3750, 'none', 'none', 'unworthy - Mythical (Lv.50)', 50, 6075, 6),
(415, 32, 'Uncommon Wand of Pacifism', 'Uncommon', 'Wand', 25, 10, 225, 'Healer', 'none', 'false', 0, 18, 2),
(416, 32, 'Uncommon Daggers', 'Uncommon', 'Daggers', 50, 20, 675, 'none', 'none', 'false', 0, 135, 2),
(417, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(418, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(419, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1),
(420, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(421, 32, 'Uncommon Sword', 'Uncommon', 'Sword', 100, 10, 450, 'none', 'none', 'false', 0, 90, 2),
(422, 32, 'Legendary Claymore', 'Legendary', 'Claymore', 750, 3, 3150, 'none', 'none', 'unworthy - Legendary (Lv.25)', 25, 3544, 5),
(423, 32, 'Common War Hammer', 'Common', 'War Hammer', 100, 5, 500, 'none', 'none', 'false', 0, 25, 1),
(424, 32, 'Epic Sword', 'Epic', 'Sword', 200, 10, 850, 'none', 'none', 'false', 0, 680, 4),
(425, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(426, 32, 'Common Wand of Perserverance', 'Common', 'Wand', 13, 10, 188, 'Sturdy', 'none', 'false', 0, 5, 1),
(427, 32, 'Common Daggers', 'Common', 'Daggers', 25, 20, 375, 'none', 'none', 'false', 0, 19, 1);

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
  MODIFY `forgingMaterialId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `weapon inventory`
--
ALTER TABLE `weapon inventory`
  MODIFY `weaponId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=428;

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
