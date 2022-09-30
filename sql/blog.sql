/*
 Navicat Premium Data Transfer

 Source Server         : SE
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 30/09/2022 08:21:02
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog`  (
  `id` int(16) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 16 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES (1, 'Git基础教程1 -【本地版本控制】', 'Git是一个免费的、开源的分布式版本控制系统，旨在以快速高效的方式处理从小型到大型的所有项目。不论是在开发过程中或是日常办公中，版本控制都是不可忽略的一环，每一次代码版本的迭代都应该记录在日志中，并且能随时在版本之间穿梭。\r\n虽然说这确实是一种版本控制的方法，但效率极低，也只可能用于个人。软件工程绝大多数需要团队合作开发，所以就更需要一个方便可靠的版本管理工具来管理整个团队的项目。在Git内，文件被分为三种状态：已修改(modified)，已暂存(staged)，已提交(committed)。\r\n在Git管理项目时的三个工作区域：工作目录，暂存区域，本地仓库。\r\n基本的 Git 工作流程如下：\r\n\r\n1.在工作目录中修改某些文件。\r\n2.对修改后的文件进行快照，然后保存到暂存区域。\r\n3.提交更新，将保存在暂存区域的文件快照永久转储到 Git 目录中。');
INSERT INTO `blog` VALUES (2, 'qui est esse', 'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla');
INSERT INTO `blog` VALUES (3, 'ea molestias quasi exercitationem repellat qui ipsa sit aut', 'et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut');
INSERT INTO `blog` VALUES (4, 'eum et est occaecati', 'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit');
INSERT INTO `blog` VALUES (5, 'nesciunt quas odio', 'repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque');
INSERT INTO `blog` VALUES (12, 'this.title', 'this.content');
INSERT INTO `blog` VALUES (13, '12312', '213123');
INSERT INTO `blog` VALUES (14, 'test', 'tese23213');
INSERT INTO `blog` VALUES (15, '参数', '消除');

SET FOREIGN_KEY_CHECKS = 1;
