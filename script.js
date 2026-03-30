<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Tessa & D Events - Location de mobilier et décoration de mariage en Belgique. Transformez votre événement en moment magique avec notre sélection chic et élégante.">
    <meta name="keywords" content="location mobilier mariage, décoration mariage Belgique, location chaise mariage, décoration événementielle, wedding planner Belgique, Tessa & D Events">
    <meta name="author" content="Tessa & D Events">
    <meta name="robots" content="index, follow">
    <title>Tessa & D Events | Location Mobilier & Décoration Mariage Belgique</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        :root {
            --primary: #D4A5A5;
            --primary-dark: #B88A8A;
            --secondary: #F5E6E0;
            --accent: #E8D5D0;
            --text-dark: #4A4A4A;
            --text-light: #7A7A7A;
            --white: #FFFFFF;
            --cream: #FAF7F5;
            --gold: #C9B037;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        body {
            font-family: 'Montserrat', sans-serif;
            color: var(--text-dark);
            background-color: var(--cream);
            line-height: 1.6;
            overflow-x: hidden;
            width: 100%;
        }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 600;
            line-height: 1.2;
        }

        /* Top Bar */
        .top-bar {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            padding: 0.6rem 0;
            text-align: center;
            font-size: 0.9rem;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1001;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .top-bar a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s;
        }

        .top-bar a:hover {
            opacity: 0.9;
            text-decoration: underline;
        }

        .top-bar i {
            margin-right: 0.5rem;
        }

        /* Header */
        header {
            background: var(--white);
            box-shadow: 0 2px 20px rgba(0,0,0,0.05);
            position: fixed;
            width: 100%;
            top: 38px;
            z-index: 1000;
            transition: all 0.3s ease;
        }

        header.scrolled {
            top: 0;
            box-shadow: 0 4px 30px rgba(0,0,0,0.1);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.2rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Cormorant Garamond', serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-dark);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            white-space: nowrap;
        }

        .logo span {
            color: var(--primary-dark);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.95rem;
            position: relative;
            transition: color 0.3s;
            white-space: nowrap;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .nav-links a:hover {
            color: var(--primary-dark);
        }

        .mobile-menu {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-dark);
            padding: 0.5rem;
        }

        /* Hero Section - ESPACÉ ET AÉRÉ */
        .hero {
            margin-top: 110px;
            min-height: calc(100vh - 110px);
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hero-slider {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }

        .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1.2s ease-in-out;
            background-size: cover;
            background-position: center;
        }

        .slide.active {
            opacity: 1;
        }

        .slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%);
        }

        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: var(--white);
            max-width: 800px;
            padding: 3rem;
            animation: fadeInUp 1s ease;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            font-style: italic;
            font-weight: 600;
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2.5rem;
            font-weight: 300;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
            line-height: 1.6;
        }

        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--primary);
            color: var(--white);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 500;
            transition: all 0.3s ease;
            border: 2px solid var(--primary);
            cursor: pointer;
            font-size: 1rem;
            text-align: center;
        }

        .btn:hover {
            background: transparent;
            color: var(--white);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(212, 165, 165, 0.4);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--white);
        }

        .btn-outline:hover {
            background: var(--white);
            color: var(--text-dark);
        }

        .slider-dots {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            display: flex;
            gap: 12px;
        }

        .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(255,255,255,0.4);
            cursor: pointer;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }

        .dot.active {
            background: var(--white);
            transform: scale(1.2);
            border-color: var(--primary);
        }

        .dot:hover {
            background: rgba(255,255,255,0.8);
        }

        /* Scroll indicator */
        .scroll-indicator {
            position: absolute;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            animation: bounce 2s infinite;
        }

        .scroll-indicator i {
            color: var(--white);
            font-size: 2rem;
            opacity: 0.8;
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateX(-50%) translateY(0);
            }
            40% {
                transform: translateX(-50%) translateY(-10px);
            }
            60% {
                transform: translateX(-50%) translateY(-5px);
            }
        }

        /* Sections */
        section {
            padding: 6rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-title h2 {
            font-size: 2.8rem;
            color: var(--text-dark);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
        }

        .section-title h2::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: var(--primary);
        }

        .section-title p {
            color: var(--text-light);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 1.5rem auto 0;
        }

        /* About Section */
        .about {
            background: var(--white);
            padding: 6rem 2rem;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        .about-text h3 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }

        .about-text p {
            margin-bottom: 1.5rem;
            color: var(--text-light);
            line-height: 1.8;
            font-size: 1.05rem;
        }

        .values {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 3rem;
        }

        .value-card {
            text-align: center;
            padding: 2rem 1.5rem;
            background: var(--cream);
            border-radius: 12px;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .value-card:hover {
            transform: translateY(-5px);
            border-color: var(--accent);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .value-card i {
            font-size: 2.2rem;
            color: var(--primary);
            margin-bottom: 1rem;
        }

        .value-card h4 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
        }

        .value-card p {
            font-size: 0.95rem;
            color: var(--text-light);
            margin: 0;
        }

        .about-image {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .about-image img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.6s ease;
        }

        .about-image:hover img {
            transform: scale(1.03);
        }

        /* Services Section */
        .services {
            background: var(--cream);
            padding: 6rem 2rem;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .service-card {
            background: var(--white);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            transition: all 0.4s ease;
            position: relative;
        }

        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .service-image {
            height: 260px;
            overflow: hidden;
            position: relative;
        }

        .service-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .service-card:hover .service-image img {
            transform: scale(1.08);
        }

        .service-content {
            padding: 2rem;
        }

        .service-content h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: var(--text-dark);
        }

        .service-content p {
            color: var(--text-light);
            margin-bottom: 1.5rem;
            line-height: 1.7;
        }

        .service-content ul {
            list-style: none;
            margin-bottom: 1.5rem;
        }

        .service-content ul li {
            padding: 0.4rem 0;
            color: var(--text-light);
            position: relative;
            padding-left: 1.5rem;
            font-size: 0.95rem;
        }

        .service-content ul li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
        }

        /* Gallery Section */
        .gallery {
            background: var(--white);
            padding: 6rem 2rem;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            cursor: pointer;
            aspect-ratio: 4/3;
            box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }

        .gallery-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(212, 165, 165, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .gallery-overlay i {
            color: var(--white);
            font-size: 2.5rem;
        }

        /* Quote Section */
        .quote-section {
            background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
            padding: 6rem 2rem;
            text-align: center;
        }

        .quote-form {
            max-width: 800px;
            margin: 0 auto;
            background: var(--white);
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.08);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            text-align: left;
        }

        .form-group.full {
            grid-column: 1 / -1;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--text-dark);
            font-weight: 500;
            font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 1rem;
            border: 2px solid var(--accent);
            border-radius: 8px;
            font-family: 'Montserrat', sans-serif;
            transition: all 0.3s ease;
            font-size: 1rem;
            background: var(--white);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(212, 165, 165, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        /* Testimonials */
        .testimonials {
            background: var(--cream);
            padding: 6rem 2rem;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .testimonial-card {
            background: var(--white);
            padding: 2.5rem;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.04);
            position: relative;
            transition: transform 0.3s ease;
        }

        .testimonial-card:hover {
            transform: translateY(-5px);
        }

        .testimonial-card::before {
            content: '"';
            font-family: 'Cormorant Garamond', serif;
            font-size: 5rem;
            color: var(--primary);
            opacity: 0.2;
            position: absolute;
            top: 10px;
            left: 20px;
            line-height: 1;
        }

        .stars {
            color: var(--gold);
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }

        .testimonial-text {
            font-style: italic;
            color: var(--text-light);
            margin-bottom: 1.5rem;
            line-height: 1.8;
            position: relative;
            z-index: 1;
            font-size: 1.05rem;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .author-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: 600;
            font-size: 1.1rem;
        }

        .author-info h4 {
            color: var(--text-dark);
            font-size: 1.1rem;
            margin-bottom: 0.2rem;
        }

        .author-info p {
            color: var(--text-light);
            font-size: 0.9rem;
        }

        /* Contact Section */
        .contact {
            background: var(--white);
            padding: 6rem 2rem;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .contact-info h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: var(--text-dark);
        }

        .contact-info > p {
            color: var(--text-light);
            margin-bottom: 2.5rem;
            line-height: 1.8;
            font-size: 1.05rem;
        }

        .contact-details {
            margin-bottom: 2.5rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1.2rem;
            margin-bottom: 1.8rem;
        }

        .contact-item i {
            font-size: 1.3rem;
            color: var(--primary);
            margin-top: 0.3rem;
            width: 24px;
            text-align: center;
        }

        .contact-item div h4 {
            margin-bottom: 0.4rem;
            color: var(--text-dark);
            font-size: 1.1rem;
        }

        .contact-item div p {
            color: var(--text-light);
            line-height: 1.6;
        }

        .contact-item a {
            color: var(--primary-dark);
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .contact-item a:hover {
            color: var(--text-dark);
            text-decoration: underline;
        }

        .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-links a {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--cream);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
        }

        .social-links a:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(212, 165, 165, 0.3);
        }

        .map-container {
            background: var(--cream);
            border-radius: 16px;
            overflow: hidden;
            height: 100%;
            min-height: 450px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            border: 2px solid var(--accent);
        }

        .map-placeholder {
            text-align: center;
            color: var(--text-light);
            padding: 2rem;
        }

        .map-placeholder i {
            font-size: 3.5rem;
            color: var(--primary);
            margin-bottom: 1.5rem;
        }

        .map-placeholder h3 {
            color: var(--text-dark);
            margin-bottom: 0.5rem;
            font-size: 1.5rem;
        }

        .map-placeholder p {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }

        /* Footer */
        footer {
            background: var(--text-dark);
            color: var(--white);
            padding: 4rem 2rem 1.5rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }

        .footer-section h3 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-size: 1.3rem;
        }

        .footer-section p {
            color: #bbb;
            line-height: 1.8;
            margin-bottom: 1rem;
            font-size: 0.95rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section ul li {
            margin-bottom: 0.8rem;
        }

        .footer-section ul li a {
            color: #bbb;
            text-decoration: none;
            transition: all 0.3s;
            display: inline-block;
        }

        .footer-section ul li a:hover {
            color: var(--primary);
            transform: translateX(5px);
        }

        .footer-phone {
            font-size: 1.4rem;
            color: var(--primary);
            font-weight: 600;
            display: block;
            margin-top: 1rem;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-phone:hover {
            color: var(--white);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid #555;
            color: #999;
            font-size: 0.9rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 968px) {
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
                gap: 3rem;
            }

            .values {
                grid-template-columns: 1fr;
            }

            .hero h1 {
                font-size: 2.5rem;
            }
        }

        @media (max-width: 768px) {
            .top-bar {
                font-size: 0.8rem;
                padding: 0.5rem;
            }

            .top-bar span {
                display: none;
            }

            header {
                top: 36px;
            }

            nav {
                padding: 1rem 1.5rem;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--white);
                flex-direction: column;
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                gap: 1.5rem;
                border-top: 1px solid var(--accent);
            }

            .nav-links.active {
                display: flex;
            }

            .mobile-menu {
                display: block;
            }

            .hero {
                margin-top: 100px;
                min-height: calc(100vh - 100px);
            }

            .hero h1 {
                font-size: 2rem;
            }

            .hero p {
                font-size: 1.1rem;
            }

            .hero-content {
                padding: 2rem 1.5rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 280px;
            }

            .btn-outline {
                margin-left: 0;
            }

            .section-title h2 {
                font-size: 2rem;
            }

            .form-grid {
                grid-template-columns: 1fr;
            }

            .quote-form {
                padding: 2rem 1.5rem;
            }

            section {
                padding: 4rem 1.5rem;
            }

            .services-grid,
            .testimonials-grid {
                grid-template-columns: 1fr;
            }
        }

        /* Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* No horizontal scroll fix */
        body, html {
            max-width: 100%;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    </style>
<base target="_blank">
</head>
<body>
    <!-- Top Bar -->
    <div class="top-bar">
        <a href="tel:0492859127"><i class="fas fa-phone"></i> 0492 85 91 27</a>
        <span style="margin: 0 1rem;">|</span>
        <span>Intervention sur toute la Belgique</span>
    </div>

    <!-- Header -->
    <header id="header">
        <nav>
            <a href="#" class="logo">
                <i class="fas fa-gem"></i>
                Tessa <span>&</span> D Events
            </a>
            <ul class="nav-links" id="navLinks">
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#prestations">Prestations</a></li>
                <li><a href="#galerie">Galerie</a></li>
                <li><a href="#devis">Devis</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="tel:0492859127" class="btn" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">Appelez-nous</a></li>
            </ul>
            <div class="mobile-menu" id="mobileMenu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="accueil">
        <div class="hero-slider">
            <div class="slide active" style="background-image: url('https://kimi-web-img.moonshot.cn/img/southerneventsonline.com/481751c14e2f8f338470b13820432221009cc867.jpg');"></div>
            <div class="slide" style="background-image: url('https://kimi-web-img.moonshot.cn/img/curatedevents.com/d6cd880e6aa22fd58226e35c5c968e597c35058f.webp');"></div>
            <div class="slide" style="background-image: url('https://kimi-web-img.moonshot.cn/img/treasuryontheplaza.com/0defb7378a71023e697a570c307e7cb49af4a89c.jpeg');"></div>
        </div>
        <div class="hero-content">
            <h1>Votre Mariage, Notre Passion</h1>
            <p>Location de mobilier et décoration d'exception pour des moments inoubliables en Belgique</p>
            <div class="hero-buttons">
                <a href="#devis" class="btn">Demander un devis</a>
                <a href="#contact" class="btn btn-outline">Contactez-nous</a>
            </div>
        </div>
        <div class="slider-dots">
            <span class="dot active" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        <div class="scroll-indicator">
            <i class="fas fa-chevron-down"></i>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="apropos">
        <div class="about-content">
            <div class="about-text fade-in">
                <h3>Créateurs d'Ambiances Uniques</h3>
                <p>Chez Tessa & D Events, nous transformons vos rêves en réalité. Spécialisés dans la location de mobilier et la décoration de mariage en Belgique, nous mettons notre expertise et notre créativité au service de votre événement.</p>
                <p>De la cérémonie laïque à la réception, nous vous accompagnons dans la création d'une atmosphère qui vous ressemble, alliant élégance, raffinement et attention aux détails.</p>
                
                <div class="values">
                    <div class="value-card">
                        <i class="fas fa-heart"></i>
                        <h4>Passion</h4>
                        <p>Chaque mariage est unique et mérite toute notre attention</p>
                    </div>
                    <div class="value-card">
                        <i class="fas fa-award"></i>
                        <h4>Qualité</h4>
                        <p>Des matériaux premium et un service irréprochable</p>
                    </div>
                    <div class="value-card">
                        <i class="fas fa-handshake"></i>
                        <h4>Confiance</h4>
                        <p>À vos côtés de la conception au jour J</p>
                    </div>
                </div>
            </div>
            <div class="about-image fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/generalwax.com/195b4e0974eda929d87e448850b320302f08d2cd.jpg" alt="Décoration de table élégante">
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="prestations">
        <div class="section-title fade-in">
            <h2>Nos Prestations</h2>
            <p>Des solutions complètes pour sublimer votre événement, de la location de mobilier à la décoration florale</p>
        </div>
        
        <div class="services-grid">
            <div class="service-card fade-in">
                <div class="service-image">
                    <img src="https://kimi-web-img.moonshot.cn/img/apexpartyrentals.com/6b40b956491cb5c6db5fb5df33bdb1a0af2792cd.png" alt="Location de chaises">
                </div>
                <div class="service-content">
                    <h3>Location de Mobilier</h3>
                    <p>Des chaises Chiavari aux tables en bois massif, découvrez notre sélection de mobilier haut de gamme pour votre réception.</p>
                    <ul>
                        <li>Chaises Chiavari (or, argent, transparent)</li>
                        <li>Tables rondes et rectangulaires</li>
                        <li>Bar et tabourets</li>
                        <li>Lounge et mobilier d'extérieur</li>
                    </ul>
                    <a href="#devis" class="btn" style="padding: 0.8rem 1.5rem; font-size: 0.9rem;">En savoir plus</a>
                </div>
            </div>

            <div class="service-card fade-in">
                <div class="service-image">
                    <img src="https://kimi-web-img.moonshot.cn/img/www.valarflowers.com/7694f3d1efe594fcdabada3b81a880d99baac204.jpg" alt="Arche florale">
                </div>
                <div class="service-content">
                    <h3>Décoration Florale</h3>
                    <p>Des compositions florales sur mesure pour créer l'ambiance romantique et élégante de vos rêves.</p>
                    <ul>
                        <li>Arches et structures florales</li>
                        <li>Centres de table</li>
                        <li>Bouquets de mariée</li>
                        <li>Décoration d'allée</li>
                    </ul>
                    <a href="#devis" class="btn" style="padding: 0.8rem 1.5rem; font-size: 0.9rem;">En savoir plus</a>
                </div>
            </div>

            <div class="service-card fade-in">
                <div class="service-image">
                    <img src="https://kimi-web-img.moonshot.cn/img/static.wixstatic.com/082df7346e0abe118e6cc7072f547e7e719e69ea.jpg" alt="Accessoires de décoration">
                </div>
                <div class="service-content">
                    <h3>Accessoires & Détails</h3>
                    <p>La touche finale qui fait toute la différence. Découvrez nos accessoires soigneusement sélectionnés.</p>
                    <ul>
                        <li>Vaisselle et verrerie</li>
                        <li>Linge de table</li>
                        <li>Éclairage et bougies</li>
                        <li>Panneaux et signalétique</li>
                    </ul>
                    <a href="#devis" class="btn" style="padding: 0.8rem 1.5rem; font-size: 0.9rem;">En savoir plus</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery" id="galerie">
        <div class="section-title fade-in">
            <h2>Notre Galerie</h2>
            <p>Inspirez-vous de nos réalisations et imaginez votre propre décoration de rêve</p>
        </div>
        
        <div class="gallery-grid">
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/curatedevents.com/9b872ae167562006ea644f8dac62b0b6f70150e5.webp" alt="Réception élégante sous tente">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/www.valarflowers.com/6f23ab267ece9a083d78db6efe50fd05b94ac0ee.jpg" alt="Arche florale bohème">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/www.venturarental.com/2b4e8fd1f092147e1c654b5ec72e77a2751614db.webp" alt="Table d'honneur luxueuse">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/southerneventsonline.com/481751c14e2f8f338470b13820432221009cc867.jpg" alt="Salle de réception décorée">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/generalwax.com/195b4e0974eda929d87e448850b320302f08d2cd.jpg" alt="Centre de table romantique">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://kimi-web-img.moonshot.cn/img/treasuryontheplaza.com/0defb7378a71023e697a570c307e7cb49af4a89c.jpeg" alt="Cérémonie élégante">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section" id="devis">
        <div class="section-title fade-in" style="color: var(--text-dark); margin-bottom: 3rem;">
            <h2>Demandez votre Devis Gratuit</h2>
            <p>Racontez-nous votre projet et recevez une estimation personnalisée sous 24h</p>
        </div>
        
        <form class="quote-form fade-in" id="quoteForm">
            <div class="form-grid">
                <div class="form-group">
                    <label for="nom">Nom complet *</label>
                    <input type="text" id="nom" name="nom" required placeholder="Votre nom">
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="votre@email.com">
                </div>
                <div class="form-group">
                    <label for="telephone">Téléphone *</label>
                    <input type="tel" id="telephone" name="telephone" placeholder="0492 85 91 27" required>
                </div>
                <div class="form-group">
                    <label for="date">Date de l'événement</label>
                    <input type="date" id="date" name="date">
                </div>
                <div class="form-group">
                    <label for="type">Type d'événement</label>
                    <select id="type" name="type">
                        <option value="mariage">Mariage</option>
                        <option value="anniversaire">Anniversaire</option>
                        <option value="entreprise">Événement d'entreprise</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="invites">Nombre d'invités</label>
                    <select id="invites" name="invites">
                        <option value="20-50">20-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-150">100-150</option>
                        <option value="150+">150+</option>
                    </select>
                </div>
                <div class="form-group full">
                    <label for="message">Décrivez votre projet *</label>
                    <textarea id="message" name="message" placeholder="Dites-nous en plus sur votre vision, vos couleurs préférées, le style recherché..." required></textarea>
                </div>
            </div>
            <button type="submit" class="btn" style="width: 100%; padding: 1.2rem; font-size: 1.1rem;">Envoyer ma demande de devis</button>
            <p style="margin-top: 1.2rem; font-size: 0.9rem; color: var(--text-light); text-align: center;">
                <i class="fas fa-info-circle" style="margin-right: 0.5rem;"></i>
                * Champs obligatoires. Nous vous contacterons rapidement au 0492 85 91 27.
            </p>
        </form>
    </section>

    <!-- Testimonials -->
    <section class="testimonials">
        <div class="section-title fade-in">
            <h2>Ils nous ont fait confiance</h2>
            <p>Découvrez les témoignages de nos mariés</p>
        </div>
        
        <div class="testimonials-grid">
            <div class="testimonial-card fade-in">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="testimonial-text">Tessa & D Events a transformé notre salle en un véritable conte de fées. L'attention aux détails, la qualité du mobilier et la créativité de l'équipe ont dépassé toutes nos attentes. Nos invités sont encore émerveillés !</p>
                <div class="testimonial-author">
                    <div class="author-avatar">ML</div>
                    <div class="author-info">
                        <h4>Marie & Laurent</h4>
                        <p>Mariage - Juin 2025</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="testimonial-text">Un service impeccable du début à la fin. L'équipe a été à l'écoute de nos besoins et a su s'adapter à notre budget sans compromettre l'élégance. Les chaises Chiavari dorées ont fait sensation !</p>
                <div class="testimonial-author">
                    <div class="author-avatar">SD</div>
                    <div class="author-info">
                        <h4>Sophie & David</h4>
                        <p>Mariage - Août 2025</p>
                    </div>
                </div>
            </div>

            <div class="testimonial-card fade-in">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p class="testimonial-text">Professionnalisme, réactivité et créativité. Tessa & D Events a parfaitement compris notre vision d'un mariage champêtre chic. Je recommande vivement leurs services à tous les futurs mariés !</p>
                <div class="testimonial-author">
                    <div class="author-avatar">ET</div>
                    <div class="author-info">
                        <h4>Emma & Thomas</h4>
                        <p>Mariage - Septembre 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="section-title fade-in">
            <h2>Contactez-nous</h2>
            <p>Prêts à donner vie à votre événement ? Parlons-en !</p>
        </div>
        
        <div class="contact-content">
            <div class="contact-info fade-in">
                <h3>Parlons de votre projet</h3>
                <p>Que vous ayez une vision précise ou que vous cherchiez l'inspiration, notre équipe est là pour vous accompagner dans la création de votre événement de rêve.</p>
                
                <div class="contact-details">
                    <div class="contact-item">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <h4>Téléphone</h4>
                            <p><a href="tel:0492859127">0492 85 91 27</a></p>
                            <p style="font-size: 0.9rem; margin-top: 0.2rem;">Du lundi au samedi, 9h-19h</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p><a href="mailto:contact@tessaetdevents.be">contact@tessaetdevents.be</a></p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Zone d'intervention</h4>
                            <p>Toute la Belgique<br><strong>Basés à Liège</strong></p>
                        </div>
                    </div>
                </div>

                <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <div class="map-container fade-in">
                <div class="map-placeholder">
                    <i class="fas fa-map-marked-alt"></i>
                    <h3>Intervention sur toute la Belgique</h3>
                    <p>Liège, Bruxelles, Namur, Charleroi, Anvers...</p>
                    <p style="margin-bottom: 1.5rem;">et partout ailleurs selon vos besoins</p>
                    <a href="tel:0492859127" class="btn" style="margin-top: 0.5rem;">
                        <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                        0492 85 91 27
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Tessa & D Events</h3>
                <p>Votre partenaire décoration et location de mobilier pour des mariages et événements d'exception en Belgique.</p>
                <a href="tel:0492859127" class="footer-phone">
                    <i class="fas fa-phone" style="margin-right: 0.5rem;"></i>
                    0492 85 91 27
                </a>
            </div>
            
            <div class="footer-section">
                <h3>Liens rapides</h3>
                <ul>
                    <li><a href="#accueil">Accueil</a></li>
                    <li><a href="#prestations">Nos Prestations</a></li>
                    <li><a href="#galerie">Galerie Photos</a></li>
                    <li><a href="#devis">Demander un devis</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Nos Services</h3>
                <ul>
                    <li><a href="#">Location de mobilier</a></li>
                    <li><a href="#">Décoration florale</a></li>
                    <li><a href="#">Accessoires de mariage</a></li>
                    <li><a href="#">Installation complète</a></li>
                    <li><a href="#">Conseil personnalisé</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h3>Contact</h3>
                <p>Basés à Liège, nous intervenons dans toute la Belgique pour faire de votre événement un moment magique et inoubliable.</p>
                <p style="margin-top: 1.5rem;">
                    <i class="fas fa-phone" style="margin-right: 0.5rem; color: var(--primary);"></i> 
                    <a href="tel:0492859127" style="color: var(--primary); text-decoration: none;">0492 85 91 27</a><br>
                    <i class="fas fa-envelope" style="margin-right: 0.5rem; color: var(--primary);"></i> 
                    <a href="mailto:contact@tessaetdevents.be" style="color: #bbb; text-decoration: none;">contact@tessaetdevents.be</a>
                </p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2025 Tessa & D Events. Tous droits réservés. | Location mobilier et décoration mariage Belgique</p>
        </div>
    </footer>

    <script>
        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.getElementById('navLinks');

        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Hero Slider
        let slideIndex = 1;
        let slideInterval;

        function showSlide(n) {
            const slides = document.getElementsByClassName('slide');
            const dots = document.getElementsByClassName('dot');
            
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
            }
            
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove('active');
            }
            
            slides[slideIndex - 1].classList.add('active');
            dots[slideIndex - 1].classList.add('active');
        }

        function currentSlide(n) {
            clearInterval(slideInterval);
            showSlide(slideIndex = n);
            autoSlide();
        }

        function nextSlide() {
            showSlide(slideIndex += 1);
        }

        function autoSlide() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        autoSlide();

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.getElementById('quoteForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Create custom alert
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                padding: 2rem;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.2);
                z-index: 10000;
                text-align: center;
                max-width: 400px;
                width: 90%;
            `;
            alertDiv.innerHTML = `
                <div style="color: var(--primary); font-size: 3rem; margin-bottom: 1rem;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Merci pour votre demande !</h3>
                <p style="color: var(--text-light); margin-bottom: 1.5rem;">Nous vous contacterons très rapidement au <strong>0492 85 91 27</strong> pour discuter de votre projet.</p>
                <button onclick="this.parentElement.remove(); document.getElementById('overlay').remove();" style="background: var(--primary); color: white; border: none; padding: 0.8rem 2rem; border-radius: 50px; cursor: pointer; font-weight: 500;">Fermer</button>
            `;
            
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                z-index: 9999;
            `;
            
            document.body.appendChild(overlay);
            document.body.appendChild(alertDiv);
            
            this.reset();
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerOffset = 100;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Prevent horizontal scroll
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.overflowX = 'hidden';
        });
    </script>
</body>
</html>
