# G.O.P 

# UPDATe

2021-07-20  - 로그인 회원가입 건의게시판







## 술 Talk

" 취중진담, 진솔한 이야기를 익명으로 하고싶다면,,, 술톡 "

" 누군가의 고민을 들으며 한잔 하고싶다면 ,, 술톡"

### 목차

- 프로젝트 명세
  - 배포 환경
  - 개발환경
  - Backend
  - 핵심 라이브러리



### 프로젝트 명세

#### 배포 환경

- __URL__ : X
- __배포 여부__ : O / **X**
- __접속 가능__ : 접속 불가
- __HTTPS 적용__ : O / **X**
- __PORT__ :  8080



### 개발 환경

#### Backend

- Framework 
  - IntelliJ IDEA Community Edition 2021.1.3
  - git bash
  - Spring Boot (  )
  - HeidiSQL (11.3.0.6295 )
  - MariaDB (10.6 )
  - Intellje

<br>



### 1일차

개발 환경 및 Maria DB 공부

백엔드인 3인 모두 같은 프로그램에 버전을 사용할수있도록 똑같이 환경 셋팅을 하였습니다.

**개발 환경**과 세팅은 같습니다.

 추가 적으로 김도연(팀장)님과 저는 Spring Boot 를 사용해본적이 없어 추가 공부가 필요함을 느꼈습니다.

DB를 어떤 것을 사용할지 고민하였으며, 전공자인 신종은님께서 마리아 DB를 사용해보자는 의견을 제시하였고 백엔드 3인모두 응하였습니다. 

이후 간단하게 Maria DB를 관련하여 공부를 하였습니다.

간단한 명령어 `create database name(데이터베이스이름`), `use name(테이블이름);`,`show databases`;, `show tables;` 등을 사용해보았고 개인정으로 HeidiSQL을 사용한 DB관리를 공부하였습니다.



### 2일차~3일차

Spring Boot 를 이용한 게시판 만들기를 진행하였습니다.

이후 Frontend와 소통하기위해서 response 해줘야하는데, Django와 흐름이 비슷하여 언어를 비교적 빠르게 습득이 가능하다고 느꼈습니다. 다만 숙달하기위해서 충분한 공부와 노력이 필요하다 판단하였습니다.

`start.springboot.io` 를 통하여 기본적인 세팅을 하였습니다.

거기서 `src > main > java > 다이렉터리 ` 에서 controller, dao, service, vo 에 대해 대략적인 흐름과 사용방법을 습득하였습니다. 



###### domain package

실제 DB의 테이블과 매칭될 클래스

Entity 클래스, Core 클래스라고도 부른다.

@Entity, @Column, @Id 등을 이용하기도 한다.

 

 

###### VO ( Value Object )

데이터 그 자체로 의미를 담고 있는 객체

특정한 비즈니스 값을 담고 있다

데이터 베이스의 필드들을 속성으로 구성하고 Getter와 Setter 가 있음

DTO와 동일한 개념이지만

Read-Only, 불변성

 

 

###### DTO ( Data Transfer Object )

전송되는 데이터를 담은 컨테이너 객체

Layer간 통신 용도로 오가는 객체 

비지니스 로직까지 담아서 작업을 처리하는 용도로 사용하기도 함 

( 로직을 아예 담지 않는다고도 나온다.

계속 검색해보니깐 사람마다 정의하거나 사용하는 방법이 아예 다른 듯.. )

ex) DB 데이터 ---DTO----> Service or Controller

 

 

###### DAO ( Data Access Object )

실제로 DB에 접근하는 객체

Service와 DB를 연결하는 고리





또한, `resources > mapper `에서 xml 파일을 만들어 사용하였습니다. Sql 을 연결시켜줄때 XML 을 사용하는 것으로 이해하였습니다.

Getter setter 를 사용하지않고 롬북을 사용하는 방법도 배웠습니다. 이전 자바를배울때 게터세터를 사용할떄 번거로움을 한번에 해결할수있었던 신박한 라이브러리였습니다!

> 게시글 DB 보내기

![POST DB](C:\Users\multicampus\Desktop\1주차\사진\POST DB.PNG)

### 4일차

> https://cameldev.tistory.com/66 참조

위 블로그를 참조하여 로그인과 회원가입을 구현하려고하였습니다. 

하지만, 세션과 JWT의 차이를 몰랏던 저로써는 구현을 하며 오류가 계속 발생하였고 DB에 연결하지 못하였습니다. 현재도 공부중이지만 대략적 원인은 세션을 DB와 연결을하려면 동기화(?)를 시켜주고 서로 데이터를 주고받아야하는데 제가 그부분을 몰랐던것 같습니다.

 이후 JWT를 통해 구현을 하려고하였습니다.









