CREATE TABLE papers (
    id SERIAL PRIMARY KEY,
    paper_type VARCHAR(100),
    paper_weight VARCHAR(20),
    paper_description VARCHAR(200),
    multiplier FLOAT
);

INSERT INTO papers (paper_type, paper_weight, paper_description, multiplier) VALUES
    ('Hahnemühle Photo Rag Ultrasmooth', '305 gsm', 'Smooth Matte Finish - Hot Press', 20.5),
    ('Hahnemühle William Turner Watercolor', '308 gsm', 'Mould-Made - Cold Press - Textured', 20.5),
    ('Hahnemühle Photo Rag Satin', '310 gsm', 'Subtle sheen in printed areas – Slight texture', 20.5),
    ('Hahnemühle Photo Rag Pearl', '320 gsm', 'Luster finish, Vibrant colors – Slight texture', 20.5),
    ('Hahnemühle Photo Rag Metallic', '340 gsm', 'The only cotton rag paper w/ a silver metallic base. Excellent for BW or color', 23.0),
    ('Hahnemühle Photo Rag Baryta Gloss', '320 gsm', 'High Gloss finish, Vibrant colors – Slight texture', 23.0),
    ('Arches Aquarelle Watercolor', '240 gsm', 'Mould-Made - Cold Press - Textured', 19.5),
    ('BFK Rives Watercolor', '310 gsm', 'Mould-Made - Cold Press - Textured', 19.5),
    ('Somerset Enhanced Velvet Watercolor', '255 gsm', 'Mould-Made - Cold Press - Textured', 17.0),
    ('Museo Echt', '210 gsm', 'Matte Finish - Hot Press', 13.5),
    ('Moenkopi Unryu Fiber', '55 gsm (Rice Paper)', 'Long-Fiber Washi Paper', 15.0),
    ('Canson Baryta Photographique II', '345 gsm', '100% Acid-Free Cellulose, Barium Sulfate, Clay-Coated, Smooth, Bright White, Gloss: Amazing Color & Durability', 12.25),
    ('Epson Smooth Luster', '280 gsm', 'Standard Luster (Semi-Gloss) Photo Paper', 9.5),
    ('Heavyweight Matte Poster - Bright White, Acid-Free', '230 gsm', 'Posters & Graphics', 9.5),
    ('Phototex Wallcovering (Repositionable, Adhesive-Backed) 24” or 42” Wide Sections', '', 'Photo Murals - Signage', 12.25);