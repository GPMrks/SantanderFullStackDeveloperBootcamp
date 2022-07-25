package me.dio.springdatajpa;

import me.dio.springdatajpa.model.User;
import me.dio.springdatajpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StartApp implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        List<User> users = userRepository.findByNameContaining("Guilherme");
        for (User u : users){
            System.out.println(u);
        }

/*        User user = new User();
        user.setName("Guilherme");
        user.setUsername("GPMrks");
        user.setPassword("password");

        User user1 = new User();
        user1.setName("Guilherme Marques");
        user1.setUsername("GPMrks");
        user1.setPassword("password");

        User user2 = new User();
        user2.setName("Jonas Jorge");
        user2.setUsername("JJJames");
        user2.setPassword("3jotas");

        userRepository.save(user);
        userRepository.save(user1);
        userRepository.save(user2);*/

        for (User u : userRepository.findAll()){
            System.out.println(u);
        }

    }

}
