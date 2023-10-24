package ex3.postman.UserRepository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import ex3.postman.Model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    
}
