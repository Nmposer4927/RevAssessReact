-- A. WRITE a query that will find ALL USER info related TO the users WITH the ROLE OF BASIC_USER --

SELECT * FROM APP_USER LEFT JOIN USER_ROLE ON APP_USER.role_id = USER_ROLE.role_id WHERE USER_ROLE.name = 'BASIC_USER'; 

-- B. WRITE a STATEMENT that will INSERT a NEW USER INTO the APP_USER TABLE WITH a ROLE OF PREMIUM_USER -- 

INSERT INTO APP_USER (username, password, first_name, last_name, role_id) VALUES 
			('nmposer', 'hashedpassword', 'Natasha', 'Poser', 4);
			
-- C. WRITE a query that will find ALL users AND study SETS that ARE related TO the USER WITH an id OF 4 --

SELECT * FROM APP_USER LEFT JOIN STUDY_SET ON STUDY_SET.owner_id = APP_USER.user_id WHERE user_id = 4;

-- D. WRITE a query that will obtain the owner's username AND ROLE name, AS well AS the catagory name, questions, AND answers OF --
-- OF flashcard contained WITHIN the study SET WITH an id OF 1 --