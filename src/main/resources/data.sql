insert into user (username, password, enabled, role) values ('admin', '$2a$10$f7XU0YpDRXxdRl9zO/j4.uFLdFNFm0jx2rTl2untB3TvSqKcVzhYW', true, 'ROLE_ADMIN');
insert into user (username, password, enabled, role) values ('user', '$2a$10$f7XU0YpDRXxdRl9zO/j4.uFLdFNFm0jx2rTl2untB3TvSqKcVzhYW', true, 'ROLE_USER');

insert into to_do_list (user_id, complete, name, progress, created_at, updated_at) values (1, false, 'issue1', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into to_do_list (user_id, complete, name, progress, created_at, updated_at) values (1, false, 'issue2', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into to_do_list (user_id, complete, name, progress, created_at, updated_at) values (2, false, 'issue3', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into to_do_list (user_id, complete, name, progress, created_at, updated_at) values (2, false, 'issue4', 'NEW', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into list_content (todolist_id, text, created_at, updated_at) values (1, 'message1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into list_content (todolist_id, text, created_at, updated_at) values (1, 'message2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into list_content (todolist_id, text, created_at, updated_at) values (2, 'message3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into list_content (todolist_id, text, created_at, updated_at) values (3, 'message4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into label (text, created_at, updated_at) values ('label1', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label2', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label3', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());
insert into label (text, created_at, updated_at) values ('label4', CURRENT_TIMESTAMP(),  CURRENT_TIMESTAMP());

insert into to_do_list_labels (to_do_lists_id, labels_id) values (1, 1);
insert into to_do_list_labels (to_do_lists_id, labels_id) values (1, 2);
insert into to_do_list_labels (to_do_lists_id, labels_id) values (2, 1);
insert into to_do_list_labels (to_do_lists_id, labels_id) values (2, 4);
insert into to_do_list_labels (to_do_lists_id, labels_id) values (3, 3);
insert into to_do_list_labels (to_do_lists_id, labels_id) values (3, 4);