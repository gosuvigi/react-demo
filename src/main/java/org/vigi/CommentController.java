package org.vigi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * Created by vigi on 5/31/2015.
 */
@Controller
public class CommentController {

    private List<Comment> comments = new CopyOnWriteArrayList<>();

    @PostConstruct
    void init() {
        Comment comment = new Comment();
        comment.setAuthor("hodor");
        comment.setText("hodor");
        comments.add(comment);
    }

    @RequestMapping(value = "/comments", method = RequestMethod.GET, produces = "application/json")
    public ResponseEntity getAllComments() {
        return ResponseEntity.ok(comments);
    }

    @RequestMapping(value = "/comments", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
    @ResponseStatus(value = HttpStatus.CREATED)
    @ResponseBody
    public void addComment(@RequestBody final Comment added) {
        comments.add(added);
    }

    @RequestMapping("/")
    public String home() {
        return "index";
    }


}
