<?php include ("./inc/header.php"); ?>

<!-- navigation bar -->
<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3">
  <div class="container">
    <a href="#" class="navbar-brand">Registration Form</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navmenu">
      <button class="btn btn-outline-light me-3">Login</button>
      <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#enroll">Sign Up</button>
    </div>
  </div>
</nav>

<!-- hero section -->
<section class="bg-dark p-5 text-light">
  <div class="container">
    <div class="d-flex align-items-center justify-content-center">
      <div class="text-center text-md-start">
        <h1>Empower Your Future</h1>

        <p class="lead my-4">
          Unlock your full potential and take your education to the next level! Sign up now and gain access to a
          vast library of educational resources, expert-led courses, and a community of learners dedicated to growth
          and success
        </p>

        <button class="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target="#enroll">
          Start Your Journey
        </button>
      </div>
      <img src="./images/hero.svg" alt="hero-img" class="img-fluid w-50 d-md-block d-none" />
    </div>
  </div>
</section>

<!-- footer -->
<?php include ("./inc/footer.php"); ?>

<!-- modal section -->
<div class="modal fade" id="enroll" tabindex="-1">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <!-- modal header -->
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="enrollLabel">Enrollment</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- modal body -->
      <div class="modal-body">
        <div class="row g-5">
          <!-- actors list -->
          <div class="col-md-5 col-lg-4 order-md-last">
            <h4 class="text-primary mb-3">Your Birthday Squad</h4>

            <ul class="list-group mb-3 actors-list"></ul>
          </div>

          <!-- form fields -->
          <div class="col-md-7 col-lg-8">
            <h4 class="mb-3">Create a new account</h4>

            <!-- ATTENTION: START OF THE FORM -->
            <form id="form" novalidate action="./inc/form-handler.php" method="POST" enctype="multipart/form-data">
              <div class="row g-3">
                <div class="col-12 input-field input-field--fullname">
                  <label for="fullname" class="form-label">
                    Full name
                    <strong><span class="text-danger">*</span></strong>
                  </label>

                  <input name="fullname" type="text" class="form-control" id="fullname"
                    placeholder="e.g. Belal Muhammad" required />
                </div>

                <div class="col-12 input-field input-field--username">
                  <label for="username" class="form-label">
                    Username
                    <strong><span class="text-danger">*</span></strong>
                  </label>

                  <div class="input-group">
                    <span class="input-group-text">@</span>
                    <input name="username" type="text" class="form-control test" id="username"
                      placeholder="e.g. belall0" required />
                  </div>
                </div>

                <div class="col-12 input-field input-field--email">
                  <label for="email" class="form-label">
                    Email
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="email" type="email" class="form-control" id="email" placeholder="e.g. belal@example.com"
                    required />
                </div>

                <div class="col-12 input-field input-field--birthday">
                  <label for="birthday" class="form-label">
                    Date of birth
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="date" type="date" id="birthday" class="form-control" required />
                </div>

                <div class="col-12 input-field input-field--phone">
                  <label for="phone" class="form-label">
                    Phone
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="phone" type="tel" id="phone" class="form-control" placeholder="e.g. 0103 333 6858"
                    required />
                </div>

                <div class="col-12 input-field input-field--address">
                  <label for="address" class="form-label">
                    Address
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="address" type="text" class="form-control" id="address" placeholder="e.g. Giza, Egypt"
                    required />
                </div>

                <div class="col-12 input-field input-field--password">
                  <label for="password" class="form-label">
                    Password
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="password" type="password" class="form-control" id="password" required />

                  <div class="form-text">
                    Your password must be at least 8 characters long, contain at least 1 number and 1 special
                    character
                  </div>
                </div>

                <div class="col-12 input-field input-field--confirmPassword">
                  <label for="confirmPass" class="form-label">
                    Confirm password
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input type="password" class="form-control" id="confirmPass" required />
                </div>

                <div class="col-12 pt-5 input-field input-field--imageInput">
                  <label class="form-label" for="imageInput">
                    Choose Your Image
                    <strong><span class="text-danger">*</span></strong>
                  </label>
                  <input name="file" type="file" class="form-control" id="imageInput" required />
                </div>

                <hr class="my-4" />

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="same-address" />
                  <label class="form-check-label" for="same-address">Remember me</label>
                </div>

                <button name="submit" class="w-100 btn btn-primary btn-lg" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</body>

</html>