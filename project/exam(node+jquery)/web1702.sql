/*
Navicat MySQL Data Transfer

Source Server         : ubuntu
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : web1702

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2017-11-24 19:12:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gredit` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', 'html', '4');
INSERT INTO `courses` VALUES ('2', 'css', '10');
INSERT INTO `courses` VALUES ('3', 'js', '40');
INSERT INTO `courses` VALUES ('4', 'node', '8');
INSERT INTO `courses` VALUES ('5', 'ES6', '10');

-- ----------------------------
-- Table structure for hotel
-- ----------------------------
DROP TABLE IF EXISTS `hotel`;
CREATE TABLE `hotel` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `idCard` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hotel
-- ----------------------------
INSERT INTO `hotel` VALUES ('1', 'larry', '1405111111111111111111', 'female');
INSERT INTO `hotel` VALUES ('2', 'terry', '1405111111111111111111', 'male');
INSERT INTO `hotel` VALUES ('3', 'bob', '1405111111111111111', 'female');
INSERT INTO `hotel` VALUES ('4', 'mary', '147272828292922002020', 'female');
INSERT INTO `hotel` VALUES ('5', 'tom', '151551515151555151515', 'male');

-- ----------------------------
-- Table structure for students
-- ----------------------------
DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `birth` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of students
-- ----------------------------
INSERT INTO `students` VALUES ('1', 'larry', '男', '1998');
INSERT INTO `students` VALUES ('2', 'mary', '女', '1996');
INSERT INTO `students` VALUES ('3', 'xuge', '女', '1998');
INSERT INTO `students` VALUES ('4', 'terry', '男', '1998');

-- ----------------------------
-- Table structure for stus
-- ----------------------------
DROP TABLE IF EXISTS `stus`;
CREATE TABLE `stus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stus
-- ----------------------------
INSERT INTO `stus` VALUES ('74', '111', '12', 'male');
INSERT INTO `stus` VALUES ('75', '12222', '12222', 'male');
INSERT INTO `stus` VALUES ('76', '12', '122222', 'male');
INSERT INTO `stus` VALUES ('77', '14444444444444444444', '444444444', '');
INSERT INTO `stus` VALUES ('78', '14444444444444444444', '444444444', '');
INSERT INTO `stus` VALUES ('79', 'xuge', '12', 'female');
INSERT INTO `stus` VALUES ('80', 'xuge', '13', '');
INSERT INTO `stus` VALUES ('81', 'xuge', '13', '');

-- ----------------------------
-- Table structure for tbl_exam_choice
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_choice`;
CREATE TABLE `tbl_exam_choice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `correct` int(1) DEFAULT NULL,
  `subject_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FKA24982C03F8D0CE4` (`subject_id`),
  CONSTRAINT `FKA24982C03F8D0CE4` FOREIGN KEY (`subject_id`) REFERENCES `tbl_exam_subject` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_choice
-- ----------------------------
INSERT INTO `tbl_exam_choice` VALUES ('1', 'byte', '0', '1');
INSERT INTO `tbl_exam_choice` VALUES ('2', 'short', '0', '1');
INSERT INTO `tbl_exam_choice` VALUES ('3', 'int', '0', '1');
INSERT INTO `tbl_exam_choice` VALUES ('4', 'long', '1', '1');
INSERT INTO `tbl_exam_choice` VALUES ('5', '脚本语言', '1', '2');
INSERT INTO `tbl_exam_choice` VALUES ('6', '顺序执行', '1', '2');
INSERT INTO `tbl_exam_choice` VALUES ('7', '解释性语言', '1', '2');
INSERT INTO `tbl_exam_choice` VALUES ('8', '变异型语言', '0', '2');
INSERT INTO `tbl_exam_choice` VALUES ('9', '这是A选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('10', '这是正确选项', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('11', '这是C选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('12', '这是D选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('13', '这是A选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('14', '这是D选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('15', '这是C选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('16', '这是正确选项', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('17', '这是C选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('18', '这是A选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('19', '这是正确选项', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('20', '这是D选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('21', '这是A选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('22', '这是正确选项', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('23', '这是C选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('24', '这是D选项', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('25', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('26', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('27', '1', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('28', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('29', '222', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('30', '222', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('31', '222', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('32', '222', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('33', '12121', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('34', '12121', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('35', '121', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('36', '1212', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('37', '1212', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('38', '1212', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('39', '121212', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('40', '1212', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('41', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('42', '1', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('43', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('44', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('45', '1', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('46', '1', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('47', '1', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('48', '1', '1', null);
INSERT INTO `tbl_exam_choice` VALUES ('49', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('50', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('51', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('52', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('53', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('54', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('55', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('56', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('57', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('58', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('59', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('60', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('61', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('62', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('63', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('64', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('65', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('66', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('67', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('68', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('69', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('70', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('71', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('72', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('73', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('74', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('75', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('76', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('77', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('78', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('79', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('80', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('81', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('82', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('83', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('84', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('85', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('86', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('87', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('88', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('89', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('90', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('91', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('92', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('93', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('94', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('95', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('96', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('97', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('98', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('99', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('100', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('101', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('102', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('103', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('104', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('105', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('106', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('107', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('108', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('109', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('110', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('111', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('112', '', '0', null);
INSERT INTO `tbl_exam_choice` VALUES ('113', '', '0', '47');
INSERT INTO `tbl_exam_choice` VALUES ('114', '', '0', '47');
INSERT INTO `tbl_exam_choice` VALUES ('115', '', '0', '47');
INSERT INTO `tbl_exam_choice` VALUES ('116', '', '0', '47');

-- ----------------------------
-- Table structure for tbl_exam_departmentes
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_departmentes`;
CREATE TABLE `tbl_exam_departmentes` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_departmentes
-- ----------------------------
INSERT INTO `tbl_exam_departmentes` VALUES ('1', 'WebUI');
INSERT INTO `tbl_exam_departmentes` VALUES ('2', 'JavaEE');
INSERT INTO `tbl_exam_departmentes` VALUES ('3', '大数据');
INSERT INTO `tbl_exam_departmentes` VALUES ('4', 'Android');
INSERT INTO `tbl_exam_departmentes` VALUES ('5', 'PHP');
INSERT INTO `tbl_exam_departmentes` VALUES ('6', 'IOS');

-- ----------------------------
-- Table structure for tbl_exam_paper
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_paper`;
CREATE TABLE `tbl_exam_paper` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `answerQuestionTime` double DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `totalPoints` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK92534C8DF2C32590` (`department_id`),
  KEY `FK92534C8D5CC62F70` (`user_id`),
  CONSTRAINT `FK92534C8D5CC62F70` FOREIGN KEY (`user_id`) REFERENCES `tbl_exam_user` (`id`),
  CONSTRAINT `FK92534C8DF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_departmentes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_paper
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_exam_papersubject
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_papersubject`;
CREATE TABLE `tbl_exam_papersubject` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `score` int(11) DEFAULT NULL,
  `examPaper_id` bigint(20) DEFAULT NULL,
  `subject_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK5B4F3FFF3F8D0CE4` (`subject_id`),
  KEY `FK5B4F3FFF9D52EAA4` (`examPaper_id`),
  CONSTRAINT `FK5B4F3FFF3F8D0CE4` FOREIGN KEY (`subject_id`) REFERENCES `tbl_exam_subject` (`id`),
  CONSTRAINT `FK5B4F3FFF9D52EAA4` FOREIGN KEY (`examPaper_id`) REFERENCES `tbl_exam_paper` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_papersubject
-- ----------------------------

-- ----------------------------
-- Table structure for tbl_exam_subject
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_subject`;
CREATE TABLE `tbl_exam_subject` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `analysis` varchar(255) DEFAULT NULL,
  `answer` varchar(255) DEFAULT NULL,
  `checkState` varchar(255) DEFAULT NULL,
  `stem` varchar(255) DEFAULT NULL,
  `uploadTime` datetime DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  `subjectLevel_id` bigint(20) DEFAULT NULL,
  `subjectType_id` bigint(20) DEFAULT NULL,
  `topic_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FKAC2D3EDD9E4D9C4` (`subjectType_id`),
  KEY `FKAC2D3EDF2C32590` (`department_id`),
  KEY `FKAC2D3ED5CC62F70` (`user_id`),
  KEY `FKAC2D3EDB797230` (`subjectLevel_id`),
  KEY `FKAC2D3ED12BE0C84` (`topic_id`),
  CONSTRAINT `FKAC2D3ED12BE0C84` FOREIGN KEY (`topic_id`) REFERENCES `tbl_exam_topic` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKAC2D3ED5CC62F70` FOREIGN KEY (`user_id`) REFERENCES `tbl_exam_user` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKAC2D3EDB797230` FOREIGN KEY (`subjectLevel_id`) REFERENCES `tbl_exam_subjectlevel` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKAC2D3EDD9E4D9C4` FOREIGN KEY (`subjectType_id`) REFERENCES `tbl_exam_subjecttype` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FKAC2D3EDF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_departmentes` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_subject
-- ----------------------------
INSERT INTO `tbl_exam_subject` VALUES ('1', '单选题第1题的解析', 'byte,short,int,long', '通过', 'Java中的基本数据类型有哪些', '2017-01-13 09:24:52', '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('2', '多选题第1题的解析', '脚本性,解释执行,弱类型,顺序执行,标记性', '通过', 'Javascript是一种（）语言，具有（）（）（）的特点', '2017-01-13 09:31:51', '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('3', '多选题第2题的解析', '$jquery_0_one    jquery-$one,&jquery_one,0jquery_$ ', '未审核', '以下标识符能够在js中使用的为', '2017-10-08 14:00:40', '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('4', '多选题第3题的解析', '1，2，3，4', '未审核', '2,1,1,1', '2017-10-03 19:33:03', '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('5', '单选题第3题的解析', '1,2,3,4', '未审核', '1,1,1,1', '2017-10-02 19:55:34', '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('6', '简答第1题的解析', '这是Id=6的answer', '通过', '这是一道简答题，id为6', '2017-10-03 12:37:54', '1', '1', '3', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('7', '1111', '这是Id=7的answer', '未审核', '1111', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('8', '123321', '1,2,3,4', '未审核', '123', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('9', '这是多选题的答案', 'aaa,bbb,ccc,ddd', '未审核', '这是我插入的一道多选题。。。。', null, '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('10', '这是一道简答题', '这是Id=6的answer', '未审核', '这是一道简答题', null, '1', '1', '3', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('11', '这是我输入的解析', '这是A选项,这是B选项,这是c选项,这是D选项', '未审核', '这是我插入的webUI方向的多选题', null, '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('12', '这是我输入的解析', '这是A选项,这是B选项,这是c选项,这是D选项', '未审核', '这是我插入的webUI方向的多选题', null, '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('13', '这是我测试的答案解析', '这是A选项,这是B选项,这是C选项,这是D选项', '未审核', '这是我测试的第一道题', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('14', '这是答案解析', '这是A选项,这是正确选项,这是C选项,这是D选项', '未审核', '这是我测试的题目', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('15', '这是答案解析', '这是A选项,这是正确选项,这是C选项,这是D选项', '未审核', '这是我测试的题目', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('16', '这是答案解析', '这是A选项,这是正确选项,这是C选项,这是D选项', '未审核', '这是我测试的题目', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('17', '这是答案解析', '这是A选项,这是正确选项,这是C选项,这是D选项', '未审核', '这是我测试的题目', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('18', '1', '1,1,1,1', '未审核', '1111111', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('19', '', '222,222,222,222', '未审核', '222', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('20', '1212', '12121,12121,121,1212', '未审核', '12121', null, '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('21', '12', '1212,1212,121212,1212', '未审核', '1212', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('22', '1', '1,1,1,1', '未审核', '12', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('23', '111', '1,1,1,1', '未审核', '111', null, '1', '1', '2', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('24', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('25', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('26', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('27', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('28', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('29', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('30', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('31', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('32', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('33', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('34', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('35', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('36', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('37', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('38', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('39', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('40', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('41', '', ',,,', '通过', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('42', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('43', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('44', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('45', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('46', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);
INSERT INTO `tbl_exam_subject` VALUES ('47', '', ',,,', '未审核', '', null, '1', '1', '1', '1', null);

-- ----------------------------
-- Table structure for tbl_exam_subjectlevel
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_subjectlevel`;
CREATE TABLE `tbl_exam_subjectlevel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_subjectlevel
-- ----------------------------
INSERT INTO `tbl_exam_subjectlevel` VALUES ('1', 'easy', '简单');
INSERT INTO `tbl_exam_subjectlevel` VALUES ('2', 'medium', '中等');
INSERT INTO `tbl_exam_subjectlevel` VALUES ('3', 'difficult', '难');

-- ----------------------------
-- Table structure for tbl_exam_subjecttype
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_subjecttype`;
CREATE TABLE `tbl_exam_subjecttype` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_subjecttype
-- ----------------------------
INSERT INTO `tbl_exam_subjecttype` VALUES ('1', 'radio', '单选题');
INSERT INTO `tbl_exam_subjecttype` VALUES ('2', 'check', '多选题');
INSERT INTO `tbl_exam_subjecttype` VALUES ('3', 'question', '简答题');

-- ----------------------------
-- Table structure for tbl_exam_topic
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_topic`;
CREATE TABLE `tbl_exam_topic` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK92920830F2C32590` (`department_id`),
  CONSTRAINT `FK92920830F2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_departmentes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_topic
-- ----------------------------
INSERT INTO `tbl_exam_topic` VALUES ('1', 'HTML', '1');
INSERT INTO `tbl_exam_topic` VALUES ('2', 'JavaScript', '1');
INSERT INTO `tbl_exam_topic` VALUES ('3', 'CSS', '1');
INSERT INTO `tbl_exam_topic` VALUES ('4', 'jQuery', '1');
INSERT INTO `tbl_exam_topic` VALUES ('5', 'Bootstrap', '1');
INSERT INTO `tbl_exam_topic` VALUES ('6', 'CoreJava', '2');
INSERT INTO `tbl_exam_topic` VALUES ('7', 'XML', '2');
INSERT INTO `tbl_exam_topic` VALUES ('8', 'Servlet/JSP', '2');

-- ----------------------------
-- Table structure for tbl_exam_user
-- ----------------------------
DROP TABLE IF EXISTS `tbl_exam_user`;
CREATE TABLE `tbl_exam_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `department_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `FK7857CCAAF2C32590` (`department_id`),
  CONSTRAINT `FK7857CCAAF2C32590` FOREIGN KEY (`department_id`) REFERENCES `tbl_exam_departmentes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tbl_exam_user
-- ----------------------------
