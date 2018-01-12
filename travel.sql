/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 5.5.27 : Database - travel
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`travel` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `travel`;

/*Table structure for table `tt_city` */

DROP TABLE IF EXISTS `tt_city`;

CREATE TABLE `tt_city` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `parentId` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `status` int(100) DEFAULT NULL,
  `sortOrder` int(100) DEFAULT NULL,
  `isParent` int(100) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '2018-01-08 15:27:01',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=267 DEFAULT CHARSET=utf8;

/*Data for the table `tt_city` */

insert  into `tt_city`(`id`,`parentId`,`name`,`status`,`sortOrder`,`isParent`,`created`,`updated`) values (1,0,'国内',1,1,1,'2018-01-08 15:31:26','2018-01-08 15:27:01'),(2,1,'直辖市',1,1,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(3,1,'黑龙江省',1,2,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(4,1,'吉林省',1,3,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(5,1,'辽宁省',1,4,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(6,1,'江苏省',1,5,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(7,1,'山东省',1,6,1,'2018-01-08 15:27:01','2018-01-08 15:27:01'),(8,1,'安徽省',1,7,1,'2018-01-08 15:27:22','2018-01-08 15:27:01'),(9,1,'河北省',1,8,1,'2018-01-08 15:27:23','2018-01-08 15:27:01'),(10,1,'河南省',1,9,1,'2018-01-08 15:27:24','2018-01-08 15:27:01'),(11,1,'湖北省',1,10,1,'2018-01-08 15:27:25','2018-01-08 15:27:01'),(12,1,'湖南省',1,11,1,'2018-01-08 15:27:25','2018-01-08 15:27:01'),(13,1,'江西省',1,12,1,'2018-01-08 15:27:26','2018-01-08 15:27:01'),(14,1,'陕西省',1,13,1,'2018-01-08 15:27:27','2018-01-08 15:27:01'),(15,1,'山西省',1,14,1,'2018-01-08 15:27:27','2018-01-08 15:27:01'),(16,1,'四川省',1,15,1,'2018-01-08 15:27:28','2018-01-08 15:27:01'),(17,1,'青海省',1,16,1,'2018-01-08 15:27:29','2018-01-08 15:27:01'),(18,1,'海南省',1,17,1,'2018-01-08 15:27:29','2018-01-08 15:27:01'),(19,1,'广东省',1,18,1,'2018-01-08 15:27:30','2018-01-08 15:27:01'),(20,1,'贵州省',1,19,1,'2018-01-08 15:27:31','2018-01-08 15:27:01'),(21,1,'浙江省',1,20,1,'2018-01-08 15:27:31','2018-01-08 15:27:01'),(22,1,'福建省',1,21,1,'2018-01-08 15:27:32','2018-01-08 15:27:01'),(23,1,'甘肃省',1,22,1,'2018-01-08 15:27:33','2018-01-08 15:27:01'),(24,1,'云南省',1,23,1,'2018-01-08 15:27:33','2018-01-08 15:27:01'),(25,1,'内蒙古',1,24,1,'2018-01-08 15:27:34','2018-01-08 15:27:01'),(26,1,'宁夏',1,25,1,'2018-01-08 15:27:35','2018-01-08 15:27:01'),(27,1,'新疆',1,26,1,'2018-01-08 15:27:35','2018-01-08 15:27:01'),(28,1,'西藏',1,27,1,'2018-01-08 15:27:36','2018-01-08 15:27:01'),(29,1,'广西',1,28,1,'2018-01-08 15:27:43','2018-01-08 15:27:01'),(30,2,'北京',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(31,2,'上海',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(32,2,'天津',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(33,2,'重庆',1,4,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(34,3,'哈尔滨',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(35,3,'齐齐哈尔',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(36,3,'鸡西市',1,4,0,'2018-01-11 18:45:49','2018-01-08 15:27:01'),(37,3,'佳木斯',1,5,0,'2018-01-11 18:45:44','2018-01-08 15:27:01'),(38,4,'长春市',1,1,0,'2018-01-11 18:45:47','2018-01-08 15:27:01'),(39,4,'通化市',1,2,0,'2018-01-11 18:45:45','2018-01-08 15:27:01'),(40,4,'白城市',1,3,0,'2018-01-11 18:45:46','2018-01-08 15:27:01'),(42,5,'大连市',1,1,0,'2018-01-11 18:45:46','2018-01-08 15:27:01'),(43,5,'丹东市',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(44,5,'盘锦市',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(45,6,'南京',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(46,6,'苏州',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(47,6,'连云港',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(48,7,'青岛市',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(49,7,'烟台市',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(50,7,'日照市',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(51,8,'黄山市',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(52,9,'秦皇岛',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(53,9,'承德市',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(54,9,'张家口',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(55,10,'郑州',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(56,10,'洛阳',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(57,11,'武汉',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(58,11,'恩施',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(59,11,'神农架',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(60,12,'张家界',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(61,12,'湘西',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(62,12,'郴州',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(63,13,'景德镇',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(64,13,'九江',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(65,13,'上饶',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(66,14,'西安',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(67,14,'咸阳',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(68,14,'延安',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(69,15,'平遥',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(70,15,'大同',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(71,15,'忻州',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(72,16,'成都',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(73,16,'九寨沟',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(74,16,'峨眉山',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(75,17,'西宁',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(76,18,'三亚',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(77,18,'海口',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(78,19,'广州',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(79,19,'深圳',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(80,19,'珠海',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(81,20,'镇远',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(82,20,'西江',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(83,20,'安顺',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(84,21,'杭州',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(85,21,'乌镇',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(86,21,'舟山',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(87,22,'厦门',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(88,22,'南平',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(89,22,'泉州',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(90,23,'兰州',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(91,24,'大理',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(92,24,'香格里拉',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(93,24,'西双版纳',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(94,25,'呼伦贝尔',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(95,25,'兴安盟',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(96,26,'银川',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(97,27,'乌鲁木齐',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(98,28,'林芝',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(99,28,'阿里',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(100,28,'黔东南',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(101,29,'桂林',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(102,29,'北海',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(103,29,'贺州',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(104,0,'港澳台',1,2,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(105,104,'台湾',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(106,104,'香港',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(107,104,'澳门',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(108,105,'台北',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(109,105,'垦丁',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(110,105,'高雄',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(111,0,'日韩',1,3,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(112,111,'日本',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(113,111,'韩国',1,2,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(114,112,'东京',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(115,112,'大阪',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(116,112,'冲绳',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(117,113,'济州岛',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(118,113,'首尔',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(119,113,'釜山',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(120,0,'东南亚',1,4,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(121,120,'泰国',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(122,120,'新加坡',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(123,120,'印尼',1,3,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(124,120,'马来西亚',1,4,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(125,120,'越南',1,5,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(126,120,'缅甸',1,6,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(127,120,'柬埔寨',1,7,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(128,120,'菲律宾',1,8,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(129,120,'文莱',1,9,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(130,121,'普吉岛',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(131,121,'清迈',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(132,121,'曼谷',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(133,123,'巴厘岛',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(134,123,'民丹岛',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(135,124,'沙巴',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(136,124,'吉隆坡',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(137,124,'仙本那',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(138,125,'芽庄',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(139,125,'美奈',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(140,125,'河内',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(141,128,'长滩岛',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(142,128,'杜马盖地',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(143,128,'薄荷岛',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(144,0,'南亚西亚',1,5,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(145,144,'马尔代夫',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(146,144,'阿联酋',1,2,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(147,144,'伊朗',1,3,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(148,144,'斯里兰卡',1,4,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(149,144,'尼泊尔',1,5,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(150,144,'印度',1,6,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(151,145,'马累',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(152,145,'阿雅达岛',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(153,145,'宁静岛',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(154,146,'迪拜',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(155,146,'阿布扎比',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(156,147,'德黑兰',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(157,147,'伊斯法罕',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(158,147,'设拉子',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(159,148,'科伦坡',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(160,148,'康提',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(161,148,'尼甘布',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(162,149,'加德满都',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(163,149,'博卡拉',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(164,149,'巴德岗',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(165,150,'新德里',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(166,150,'孟买',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(167,150,'阿格拉',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(168,0,'欧洲美洲',1,6,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(169,168,'美国',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(170,168,'英国',1,2,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(171,168,'爱尔兰',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(172,168,'意大利',1,4,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(173,168,'法国',1,5,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(174,168,'瑞士',1,6,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(175,168,'西班牙',1,7,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(176,168,'葡萄牙',1,8,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(177,168,'俄罗斯',1,9,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(178,168,'德国',1,10,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(179,168,'奥地利',1,11,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(180,168,'希腊',1,12,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(181,168,'土耳其',1,13,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(182,168,'捷克',1,14,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(183,168,'匈牙利',1,15,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(184,168,'冰岛',1,16,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(185,168,'荷兰',1,18,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(186,168,'比利时',1,18,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(187,168,'美洲其他',1,19,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(188,168,'欧洲其他',1,20,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(189,169,'洛杉矶',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(190,169,'旧金山',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(191,169,'纽约',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(192,170,'伦敦',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(193,170,'爱丁堡',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(194,170,'剑桥',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(195,172,'罗马',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(196,172,'威尼斯',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(197,172,'佛罗伦萨',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(198,173,'巴黎',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(199,173,'普罗旺斯',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(200,174,'卢塞恩',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(201,174,'苏黎世',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(202,174,'日内瓦',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(203,175,'巴塞罗那',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(204,175,'马德里',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(205,175,'塞维利亚',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(206,176,'里斯本',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(207,176,'颇尔图',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(208,176,'辛特拉',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(209,177,'莫斯科',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(210,177,'贝加尔湖',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(211,177,'圣披德堡',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(212,178,'慕尼黑',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(213,178,'法兰克福',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(214,178,'柏林',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(215,179,'维也纳',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(216,179,'哈尔斯塔特',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(217,179,'莎尔茨堡',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(218,180,'圣托里尼',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(219,180,'雅典',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(220,181,'伊斯坦布尔',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(221,181,'棉花堡',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(222,181,'卡帕多奇亚',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(223,182,'布拉格',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(224,182,'克鲁姆洛夫',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(225,182,'卡罗维发利',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(226,183,'布达佩斯',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(227,184,'雷克雅未克',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(228,184,'维克',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(229,184,'(NUL阿克雷里L)',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(230,185,'阿姆斯特丹',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(231,185,'鹿特丹',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(232,185,'羊角村',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(233,186,'布鲁塞尔',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(234,186,'布鲁日',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(235,187,'加拿大',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(236,187,'巴西',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(237,187,'古巴',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(238,188,'芬兰',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(239,188,'挪威',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(240,188,'丹麦',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(241,0,'澳洲非洲',1,7,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(242,241,'澳大利亚',1,1,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(243,241,'新西兰',1,2,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(244,241,'埃及',1,3,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(245,241,'摩洛哥',1,4,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(246,241,'非洲其他',1,5,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(247,241,'澳洲其他',1,6,1,'2018-01-11 18:51:48','2018-01-08 15:27:01'),(248,242,'悉尼',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(249,242,'墨尔本',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(250,242,'黄金海岸',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(251,243,'奥克兰',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(252,243,'皇后镇',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(253,243,'基督城',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(254,247,'帕劳',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(255,247,'斐济',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(256,247,'大溪地',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(257,244,'开罗',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(258,244,'卢克索',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(259,244,'亚历山大',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(260,245,'马拉喀什',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(261,245,'卡莎布兰卡',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(262,245,'非斯',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(263,246,'毛里求斯',1,1,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(264,246,'塞舌尔',1,2,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(265,246,'肯尼亚',1,3,0,'2018-01-11 18:51:54','2018-01-08 15:27:01'),(266,246,'马达加斯加',1,4,0,'2018-01-11 18:51:54','2018-01-08 15:27:01');

/*Table structure for table `tt_forum` */

DROP TABLE IF EXISTS `tt_forum`;

CREATE TABLE `tt_forum` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `userId` bigint(100) DEFAULT NULL,
  `summary` varchar(50) DEFAULT NULL,
  `created` date DEFAULT NULL,
  `reply` text,
  `picture` varchar(100) DEFAULT NULL,
  `summaryUrl` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

/*Data for the table `tt_forum` */

insert  into `tt_forum`(`id`,`title`,`userId`,`summary`,`created`,`reply`,`picture`,`summaryUrl`) values (1,'雏菊漫天，我的荷兰之行（不是花期，依然被七月的荷兰惊艳到了）~',1,'017年的7月，我从罗马进，阿姆斯特丹出，在有限的时间内自由组合了两个最想去的国度，中间还蹭了一趟比',NULL,'沙发！想来在荷兰的六七天里的时间里，两位女主用生命凹造型，旅行结束后又用生命熬夜修图，这种认真、专注与执着，必须赞����，求阅读、求收藏、求扩散、求转发',NULL,NULL),(2,'我的2017#2017， 赤足旅行50城',3,'【我的2017足迹】按时间顺序：1月:郑州，青岛；2月:曼谷，乌隆府，清迈；3月:昆明，玉溪，元阳，',NULL,'赞赞赞赞赞！必须赞',NULL,NULL),(3,'台湾——一场粉红色的回忆【垦丁台东高雄十日】',2,'刚出门就迎接了一场小暴雨 十来分钟到达恒春 却放了晴。',NULL,'回复NINI之森：我的桌面还是西班牙 是时候换一换了',NULL,NULL),(4,'两枚小吃货，暴走南京三日行',5,'因为是突然定下来的行程，所以只有短短一天时间给我们准备，师妹四十是个冲动型的射手座，天生追求刺激，不',NULL,'法式铁板烧，都没这么讲究，哈哈',NULL,NULL),(5,'【行走呼伦贝尔】一路向北，遇见最早的深秋',6,'今年的夏天里，我仿佛做了一个很长的梦。',NULL,'介于深秋和初冬之间，身临其境，很美',NULL,NULL),(6,'贝加尔湖：我在萨满石前向你求婚，你愿意嫁给我吗？',8,'我曾偶尔想象过向我心爱的姑娘求婚的场景，青涩梦境里大多是像电视剧和广告里的那般，跳进许愿池中湿身将钻',NULL,'美美的姑娘暖暖的冬\r\n帅帅的小伙爱意浓\r\n世间姻缘系鸳鸯\r\n到老白头不羡仙。',NULL,NULL),(7,'【西安不止钟楼】8条线路，不一样的小众西安',8,'来西安玩，要么欣赏历史遗迹，要么吃爽西安美食。来西安玩，要么欣赏历史遗迹，要么吃爽西安美食。',NULL,'好棒啊  这种小众路线游完全棒啊  元旦去西安 5天3晚  想问下楼主有没有合适的路线推荐呢  两个女生\r\n\r\n',NULL,NULL),(8,'意大利之夏般的秋天~',9,'重要提示: 意大利的厕所不是我们日常认知中随处可见的WC ,你在街上几乎是找不到的，上厕所可以去街边',NULL,'谢谢楼主的美文美图。去意大利怎么能不去威尼斯呢？',NULL,NULL),(9,'食遍好吃不过百的街边米其林,寻觅香港隐于世的人间烟火',12,'对于大多数旅行者来说，香港是国际大都会，是维多利亚港绚烂的霓虹灯，是兰桂坊不眠不休的肉蒲趴。车流与人',NULL,'小姐姐近期去的香港气温如何？感觉很暖和呀',NULL,NULL),(10,'神的孩子都要去西藏——西藏、青海13天独自旅行',2,' 关于西藏安全，进藏前家里人包括朋友都在提醒我西藏的治安以及什么民风未开化等等等。在这里我想最先向大',NULL,'回复水仙Angela：女生的话是要比男生复杂点，不过一个人出去的女生路上也很多呢。可以在网上提前联系一些驴友的\r\n\r\n',NULL,NULL),(11,'我爱你，塞北的雪----------哈尔滨的冬天',5,'游记中的照片基本都是2016---2017年间的手机随手照，手机一般哦。由于游记篇幅的考虑，游记分成',NULL,'欣赏您的游记，让我们看到最美的哈尔滨，最美的冰雪世界。',NULL,NULL),(12,'带着对哥看世界——厦门，四天三晚亲子游',6,'在我跟对爸还在谈恋爱的时候就计划过要去厦门，不为别的，就因为小吃多，谁让我是妥妥的吃货呢但是厦门之旅',NULL,'很幸福的对哥，有个贴心的麻麻和很棒的爸爸',NULL,NULL),(13,'【青海湖大环线】三十载像风一样，后来的时间都与你有关',NULL,'最近，一切都安好么？\r\n最近，看了几本不错的书，吃了几顿不怎么样的（相亲）饭，结交了几个互相点赞的朋',NULL,'拍得写得都很好耶，特别是开场~',NULL,NULL),(16,'v',1,'v',NULL,NULL,NULL,NULL),(17,'324',2,'244',NULL,NULL,NULL,NULL),(18,'rr',3,'frf',NULL,NULL,NULL,NULL),(19,'rr',5,'f',NULL,NULL,NULL,NULL),(20,'f',2,'rr',NULL,NULL,NULL,NULL),(21,'ffvv',6,'v',NULL,NULL,NULL,NULL);

/*Table structure for table `tt_hotel` */

DROP TABLE IF EXISTS `tt_hotel`;

CREATE TABLE `tt_hotel` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `hotelName` varchar(50) DEFAULT NULL,
  `hotelAddress` varchar(50) DEFAULT NULL,
  `cityId` bigint(100) DEFAULT NULL,
  `hotelPrice` bigint(100) DEFAULT NULL,
  `hotelPicture` varchar(50) DEFAULT NULL,
  `hotelleve` int(11) DEFAULT NULL COMMENT '2 2星及以下，3 3星级，4 4星级，5 5星级',
  `cid` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '1 正常，2 审核，3 删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `tt_hotel` */

insert  into `tt_hotel`(`id`,`hotelName`,`hotelAddress`,`cityId`,`hotelPrice`,`hotelPicture`,`hotelleve`,`cid`,`status`) values (1,'台北凯撒大饭店','忠孝西路一段38号',19,NULL,NULL,NULL,NULL,1),(2,'大师商旅','市民大道一段209号',19,NULL,NULL,NULL,NULL,1),(3,'帅客旅店','台灣羅斯福路1段90巷2號',19,NULL,NULL,4,6,1),(4,'台北君品酒店','承德路一段3号',19,520,'',5,7,2),(5,'二十轮旅店','武昌街二段72號',19,NULL,NULL,NULL,NULL,1),(6,'迪士尼好莱坞酒店(Disney’s Hollywood Hotel)','大屿山香港迪士尼乐园度假区',17,NULL,NULL,NULL,NULL,1),(7,'香港迪士尼乐园酒店(Disneyland Hotel)','大屿山香港迪士尼乐园度假区',17,NULL,NULL,NULL,NULL,1),(8,'憙酒店','棉登径7号',17,NULL,NULL,NULL,NULL,1),(9,'英格兰宾馆','九龙尖沙咀弥敦道36-44号重庆大厦A座3楼A1室',17,NULL,NULL,NULL,NULL,1),(10,'香港珀丽酒店','铜锣湾信德街8号',17,NULL,NULL,NULL,NULL,1),(11,'中央明洞空中公园酒店','16, Myeongdong 9-gil, Jung-gu',3,NULL,NULL,NULL,NULL,1),(12,'明洞韦斯廷公寓','19-1 Namsandong 3-Ga',3,NULL,NULL,NULL,NULL,1),(13,'空中花园酒店明洞1号店','15, Myeongdong 8na-gil, Jung-gu',3,NULL,NULL,NULL,NULL,1),(14,'天空花园酒店东大门1号店','335, Dongho-ro, Jung-gu',3,NULL,NULL,NULL,NULL,1),(15,'首尔东大门大使宜必思快捷酒店','334 Toegyero, Jung-gu',3,NULL,NULL,NULL,NULL,1),(16,'西安成功国际酒店（原成功酒店） ','西安和平路59号查看地图',7,NULL,NULL,NULL,NULL,1),(17,'西安馨乐庭城中服务公寓','西安竹笆市36号',7,NULL,NULL,NULL,NULL,1),(18,'西安湘子门青年旅舍','西安湘子庙街16号',7,NULL,NULL,NULL,NULL,1),(19,'西安古城青年旅舍','西安莲湖路4号',7,NULL,NULL,NULL,NULL,1),(20,'瓦舍旅行酒店（西安钟楼南门店）','西安朱雀门里往东（右）20米顺城南巷21号',7,NULL,NULL,NULL,NULL,1),(21,'千岛湖洲际度假酒店','淳安羡山半岛',1,NULL,NULL,NULL,NULL,1),(22,'杭州华辰国际饭店','杭州平海路25号',1,NULL,NULL,NULL,NULL,1),(23,'杭州吴山驿国际青年旅舍','中山中路22号',1,NULL,NULL,NULL,NULL,1),(24,'杭州鸟山鸣主题民宿','杭州虎跑路四眼井29号',1,NULL,NULL,NULL,NULL,1),(25,'杭州青茶主题民宿客栈','杭州四眼井188号',1,NULL,NULL,NULL,NULL,1),(26,'彩虹云霄酒店','222 Rajprarop Road, Rajthevi,',18,NULL,NULL,NULL,NULL,1),(27,'曼谷亚洲酒店','296 Phayathai Road, Ratchatewee',18,NULL,NULL,NULL,NULL,1),(28,'曼谷易思廷酒店','1091/343 New Petchburi Road,Makkasan,Rajthevee',18,NULL,NULL,NULL,NULL,1),(29,'曼谷城市酒店','268 between Soi Petchburi 10-12, Petchburi Road, R',18,NULL,NULL,NULL,NULL,1),(30,'曼谷暹罗设计酒店','865 Rama 1 Road, Wangmai, Pathumwan, Bangkok',18,NULL,NULL,NULL,NULL,1),(31,'丽江芝麻开门客栈','芝麻店：五一街王家庄巷30-1号 万安店：五一街兴仁中段26号（近北门派出所）',9,NULL,NULL,NULL,NULL,1),(32,'老故事客栈（大理古城店）','大理市大理古城南门往南300米（文献路上）...',9,NULL,NULL,NULL,NULL,1),(33,'大理洱海门1号酒店','大理市大理古城洱海门旁大院子42号',9,NULL,NULL,NULL,NULL,1),(34,'西双版纳洲际度假酒店（原避寒皇冠假日度假酒店）','景洪西双版纳旅游渡假区二期曼弄枫片区...',9,NULL,NULL,NULL,NULL,1),(35,'西双版纳三和居客栈','景洪景罕寨13栋',9,NULL,NULL,NULL,NULL,1);

/*Table structure for table `tt_hotel_des` */

DROP TABLE IF EXISTS `tt_hotel_des`;

CREATE TABLE `tt_hotel_des` (
  `id` bigint(100) NOT NULL,
  `hotelNorms` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '2018-01-08 15:27:01',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_hotel_des` */

insert  into `tt_hotel_des`(`id`,`hotelNorms`,`created`,`updated`) values (0,NULL,'2018-01-11 18:56:24','2018-01-08 15:27:01');

/*Table structure for table `tt_hotelroom` */

DROP TABLE IF EXISTS `tt_hotelroom`;

CREATE TABLE `tt_hotelroom` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `hotelId` bigint(20) DEFAULT NULL,
  `hotelStyle` int(100) DEFAULT NULL,
  `peoplenNum` int(100) DEFAULT NULL,
  `hotelRoomPrice` bigint(100) DEFAULT NULL,
  `roomNum` int(100) DEFAULT NULL,
  `roomPicture` varchar(50) DEFAULT NULL,
  `standardId` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_hotelroom` */

/*Table structure for table `tt_orders` */

DROP TABLE IF EXISTS `tt_orders`;

CREATE TABLE `tt_orders` (
  `id` bigint(100) NOT NULL,
  `ispay` int(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `identifier` int(100) DEFAULT NULL,
  `price` bigint(100) DEFAULT NULL,
  `created` date NOT NULL,
  `updated` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_orders` */

/*Table structure for table `tt_replyforum` */

DROP TABLE IF EXISTS `tt_replyforum`;

CREATE TABLE `tt_replyforum` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) DEFAULT NULL,
  `replyTime` date DEFAULT NULL,
  `forumId` bigint(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_replyforum` */

/*Table structure for table `tt_scenery` */

DROP TABLE IF EXISTS `tt_scenery`;

CREATE TABLE `tt_scenery` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `sceneryName` varchar(50) DEFAULT NULL,
  `cityId` bigint(100) DEFAULT NULL,
  `scneryPrice` bigint(100) DEFAULT NULL,
  `sceneryPicture` varchar(50) DEFAULT NULL,
  `sid` int(100) DEFAULT NULL,
  `status` int(50) DEFAULT NULL COMMENT '1 正常，2 审核，3 删除',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151563445787058 DEFAULT CHARSET=utf8;

/*Data for the table `tt_scenery` */

insert  into `tt_scenery`(`id`,`sceneryName`,`cityId`,`scneryPrice`,`sceneryPicture`,`sid`,`status`) values (1,'西安秦始皇陵兵马俑电子票 窗口取票（可选与华清宫/秦陵地宫等套票）',5,1122,'',NULL,1),(2,'碑林博物馆 电子票',7,40,NULL,NULL,2),(3,'西安陕西历史博物馆 ',7,30,NULL,NULL,1),(4,'杭州灵隐飞来峰',1,45,NULL,NULL,3),(5,'杭州宋城景区 宋城大门票+宋城千古情演出门票观众席/贵宾席/家庭亲子套票（给我一天还你千年）',5,290,'',NULL,3),(6,'杭州 西溪湿地国家公园东/西区门票/船票（可定今日 直接刷身份证入园 可选摇橹船）',1,55,NULL,NULL,1),(7,'香港迪士尼乐园1日电子门票（实时出票+可选餐券+无需打印）',17,326,NULL,NULL,1),(8,'香港 海洋公园 电子门票（多套餐可选+园内缆车+可订今日+无需打印）',17,150,NULL,NULL,1),(9,'香港 杜莎夫人蜡像馆+太平山缆车+摩天台三合一 VIP快捷通道套票',17,229,NULL,NULL,2),(10,'台北 101摩天大楼观景台电子门票（自助取票/节省时间/可选故宫+101联票）',19,102,NULL,NULL,3),(11,'台湾垦丁 海生馆夜宿2天1晚 国立海洋生物博物馆亲子体验（门票+住宿+餐食）',19,528,NULL,NULL,1),(12,'非斯',2,22,NULL,NULL,NULL),(14,'fe',4,NULL,NULL,NULL,3),(15,'cc',5,NULL,NULL,NULL,3);

/*Table structure for table `tt_scenery_des` */

DROP TABLE IF EXISTS `tt_scenery_des`;

CREATE TABLE `tt_scenery_des` (
  `id` bigint(100) DEFAULT NULL,
  `scenrtyContent` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '2018-01-08 15:27:01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_scenery_des` */

insert  into `tt_scenery_des`(`id`,`scenrtyContent`,`created`,`updated`) values (151556025682981,NULL,'2018-01-10 12:57:37','2018-01-10 12:57:37'),(151556029103932,NULL,'2018-01-10 12:58:11','2018-01-10 12:58:11'),(151556268664807,NULL,'2018-01-10 13:38:06','2018-01-10 13:38:06'),(151556278694895,NULL,'2018-01-10 13:39:47','2018-01-10 13:39:47'),(151556614230147,NULL,'2018-01-10 14:35:43','2018-01-10 14:35:43'),(151556718948112,NULL,'2018-01-10 14:53:09','2018-01-10 14:53:09'),(151556727711356,NULL,'2018-01-10 14:54:37','2018-01-10 14:54:37'),(151556751964783,NULL,'2018-01-10 14:58:39','2018-01-10 14:58:39'),(151557026539126,NULL,'2018-01-10 15:44:25','2018-01-10 15:44:25'),(151557129172589,NULL,'2018-01-10 16:01:31','2018-01-10 16:01:31'),(151558014112253,NULL,'2018-01-10 18:29:01','2018-01-10 18:29:01'),(151558166875748,NULL,'2018-01-10 18:54:28','2018-01-10 18:54:28'),(151558167413848,NULL,'2018-01-10 18:54:34','2018-01-10 18:54:34'),(151558170227105,NULL,'2018-01-10 18:55:02','2018-01-10 18:55:02'),(151558183324170,NULL,'2018-01-10 18:57:13','2018-01-10 18:57:13'),(151558197276633,NULL,'2018-01-10 18:59:32','2018-01-10 18:59:32'),(151558219252607,NULL,'2018-01-10 19:03:12','2018-01-10 19:03:12'),(151558222325828,NULL,'2018-01-10 19:03:43','2018-01-10 19:03:43'),(151558241232814,NULL,'2018-01-10 19:06:52','2018-01-10 19:06:52'),(151558536750389,NULL,'2018-01-10 19:56:08','2018-01-10 19:56:08'),(151558539520772,NULL,'2018-01-10 19:56:35','2018-01-10 19:56:35'),(151558561796154,NULL,'2018-01-10 20:00:18','2018-01-10 20:00:18'),(151558563575621,NULL,'2018-01-10 20:00:35','2018-01-10 20:00:35'),(151558571662439,NULL,'2018-01-10 20:01:56','2018-01-10 20:01:56'),(151558577551235,NULL,'2018-01-10 20:02:55','2018-01-10 20:02:55'),(151558580680414,NULL,'2018-01-10 20:03:26','2018-01-10 20:03:26'),(151558616172334,NULL,'2018-01-10 20:09:22','2018-01-10 20:09:22'),(151558625578047,NULL,'2018-01-10 20:10:56','2018-01-10 20:10:56'),(151558633403024,NULL,'2018-01-10 20:12:14','2018-01-10 20:12:14'),(151558634507926,NULL,'2018-01-10 20:12:25','2018-01-10 20:12:25'),(151558635017279,NULL,'2018-01-10 20:12:30','2018-01-10 20:12:30'),(151558635703295,NULL,'2018-01-10 20:12:37','2018-01-10 20:12:37'),(151558671955752,NULL,'2018-01-10 20:18:39','2018-01-10 20:18:39'),(151558672726890,NULL,'2018-01-10 20:18:47','2018-01-10 20:18:47'),(151558706579819,NULL,'2018-01-10 20:24:25','2018-01-10 20:24:25'),(151558710219141,NULL,'2018-01-10 20:25:02','2018-01-10 20:25:02'),(151558711948028,NULL,'2018-01-10 20:25:19','2018-01-10 20:25:19'),(151558722627893,NULL,'2018-01-10 20:27:06','2018-01-10 20:27:06'),(151558726440085,NULL,'2018-01-10 20:27:44','2018-01-10 20:27:44'),(151558739198098,NULL,'2018-01-10 20:29:52','2018-01-10 20:29:52'),(151558747181638,NULL,'2018-01-10 20:31:11','2018-01-10 20:31:11');

/*Table structure for table `tt_travelgroup` */

DROP TABLE IF EXISTS `tt_travelgroup`;

CREATE TABLE `tt_travelgroup` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `startPlace` varchar(50) DEFAULT NULL,
  `destination` varchar(50) DEFAULT NULL,
  `travelGroupPrice` bigint(100) DEFAULT NULL,
  `travelDay` int(100) DEFAULT NULL,
  `travelFeature` varchar(50) DEFAULT NULL,
  `isDiscount` int(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `tt_travelgroup` */

insert  into `tt_travelgroup`(`id`,`title`,`startPlace`,`destination`,`travelGroupPrice`,`travelDay`,`travelFeature`,`isDiscount`) values (1,'春节预售】杭州直飞普吉岛+斯米兰岛7天5晚半自助游（2天自由活动+2晚网评国际五星+3晚泳池别墅+赠','杭州','普吉岛',3880,7,'赠5星精油SPA、人气餐厅、仅3站购物',NULL),(2,'杭州直飞泰国曼谷+芭提雅6天5晚跟团游（金沙岛+水上市场+绝无自费+人妖Spa+富贵黄金屋+一程尽享','杭州','曼谷',2799,6,'超高性价比、休闲之旅',NULL),(3,'宁波出发 上海迪士尼+苏沪杭+乌镇+南浔+西湖6日游（0购物真心纯玩 Disney1日Free 漫游','宁波','上海',2680,NULL,'纯玩0购物、24小时接送机、千古情主题酒店、迪士尼嗨玩一整天',NULL);

/*Table structure for table `tt_travelgroup_des` */

DROP TABLE IF EXISTS `tt_travelgroup_des`;

CREATE TABLE `tt_travelgroup_des` (
  `id` bigint(100) DEFAULT NULL,
  `travelGroupId` bigint(100) DEFAULT NULL,
  `travelContent` text,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '2018-01-08 15:27:01'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `tt_travelgroup_des` */

/*Table structure for table `tt_user` */

DROP TABLE IF EXISTS `tt_user`;

CREATE TABLE `tt_user` (
  `id` bigint(100) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `phone` int(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `status` int(50) DEFAULT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated` timestamp NOT NULL DEFAULT '2018-01-08 15:27:01',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `tt_user` */

insert  into `tt_user`(`id`,`name`,`username`,`password`,`phone`,`address`,`status`,`created`,`updated`) values (1,'陈媛媛','chen','123',2147483647,'杭州',1,'2018-01-11 09:40:48','2018-01-05 15:23:07'),(2,'成徐强','cheng','123',1222222222,'上海',1,'2018-01-11 18:58:46','2018-01-08 15:27:01'),(3,'郭炎','guo','123',2147483647,'武汉',1,'2018-01-11 18:58:46','2018-01-08 15:27:01'),(4,'黄斌鹏','huang','123',2147483647,'杭州',2,'2018-01-11 18:58:47','2018-01-08 15:27:01'),(5,'钱程辉','qian','123',2147483647,'上海',3,'2018-01-11 18:58:48','2018-01-08 15:27:01'),(6,'徐超','xu','123',2147483647,'武汉',2,'2018-01-11 18:58:49','2018-01-08 15:27:01'),(7,'svdsv','vdvv','123',25788,'esvf',3,'2018-01-11 18:58:50','2018-01-08 15:27:01'),(8,'fazg','zxzn','123',24,'assxn',3,'2018-01-11 18:58:51','2018-01-08 15:27:01'),(9,'wsc','dsdvfs','123',3245,'zscscs',1,'2018-01-11 18:58:50','2018-01-08 15:27:01');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
