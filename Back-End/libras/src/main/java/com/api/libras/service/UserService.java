package com.api.libras.service;

import com.api.libras.entity.User;
import com.api.libras.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User getUserById(Integer id){
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User authenticateUser(String email, String password){
        User user = userRepository.findByEmail(email);

        if (user != null && user.getSenha().equals(password)){
            return user;
        }
        return null;
    }
}
