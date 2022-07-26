package me.dio.springsecurityjwt.repository;

import me.dio.springsecurityjwt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT e FROM User e JOIN FETCH e.roles WHERE e.username= (:username)") //JPQL
    public User findByUsername(@Param("username") String username);

    public boolean existsByUsername(String username);

}
